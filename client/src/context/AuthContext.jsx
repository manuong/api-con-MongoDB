/* 

 Este archivo crea un contexto de autenticación en React que puede ser utilizado para compartir el estado de 
 autenticación entre componentes hijos. 
 
 El proveedor de autenticación envuelve los componentes de la aplicación y les proporciona acceso al estado 
 de autenticación a través del contexto. (ir al compenente App.jsx)

*/

import { useEffect, useState } from 'react';
import { loginRequest, logoutRequest, registerRequest, verifyTokenRequest } from '../api/auth';
import { AuthContext } from '../hooks/useAuthContext';
import Cookies from 'js-cookie';
import { editProfileRequest } from '../api/user';

/* 

Crea un nuevo contexto de autenticación llamado 'AuthContext'
Este contexto se puede utilizar para proporcionar y consumir el estado de autenticación en cualquier parte de la aplicación.
export const AuthContext = createContext();

es un hook personalizado diseñado para acceder al contexto de autenticación (AuthContext).
Este hook permite a los componentes de tu aplicación acceder fácilmente al estado de autenticación
proporcionado por el proveedor de autenticación (AuthProvider).
export const useAuth = () => {
  const context = useContext(AuthContext);

si no hay contexto significa que no estamos dentro del provedor de autenticacion
  if (!context) throw new Error('useAuth deberia de estar dentro de AuthProvider');
  return context;
}; 

Modularizando esta logica queda en el hook personalizado useAuthContext
*/

// Es un componente de React que actúa como el proveedor de contexto de autenticación.
// Toma un prop llamado children, que representa los componentes hijos que estarán envueltos por este proveedor.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      setUser(response.data);
      setAuthenticated(true);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const signin = async (user) => {
    try {
      const response = await loginRequest(user);
      setUser(response.data);
      setAuthenticated(true);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const logout = async () => {
    try {
      Cookies.remove('token');
      await logoutRequest();
      setAuthenticated(false);
      setUser({});
    } catch (error) {
      console.log(error);
    }
  };

  const editProfile = async (values) => {
    try {
      const res = await editProfileRequest(values);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
      throw new Error();
    }
  };

  useEffect(() => {
    // este setTimeout es para cerrar las alertas de los errores despues de un tiempo
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 6000);
      // cuando se desmonte el componente
      // 'clearTimeout' funcion para quitar un setTimeout
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // sirve para verificar si el token que se tiene guardado es correcto y a que usuario pertenece
  // esto al momento de cargar la pagina
  useEffect(() => {
    const cookies = Cookies.get(); // libreria para poder obtener el token de las cookies
    if (!cookies.token) setLoading(false);

    if (cookies.token) {
      verifyTokenRequest()
        .then((response) => {
          const { data } = response;
          setUser(data);
          setAuthenticated(true);
          setLoading(false);
        })
        .catch((error) => {
          alert(error.response.data.error);
          setAuthenticated(false);
          setLoading(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        errors,
        loading,
        signup,
        signin,
        logout,
        editProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  // Dentro de la función del proveedor de autenticación, se utiliza el componente <AuthContext.Provider>
  // proporcionado por el contexto de autenticación creado anteriormente.

  // Se pasa un objeto values al proveedor. Este objeto puede contener cualquier dato que desees compartir
  // a través del contexto, como el estado de autenticación.

  // El contenido de {children} se renderiza dentro del proveedor de contexto. Esto permite que los componentes
  // hijos tengan acceso al contexto de autenticación.
};
