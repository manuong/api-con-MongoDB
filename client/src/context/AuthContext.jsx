/* 

 Este archivo crea un contexto de autenticación en React que puede ser utilizado para compartir el estado de 
 autenticación entre componentes hijos. 
 
 El proveedor de autenticación envuelve los componentes de la aplicación y les proporciona acceso al estado 
 de autenticación a través del contexto. (ir al compenente App.jsx)

*/

import { useState } from 'react';
import { registerRequest } from '../api/auth';
import { AuthContext } from '../hooks/useAuthContext';

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
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

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

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
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
