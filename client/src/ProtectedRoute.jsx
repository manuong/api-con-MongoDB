/* 

El componente <Outlet /> es parte de React Router v6 y se utiliza para definir el punto de salida donde se 
renderizarán las rutas secundarias anidadas. En otras palabras, cuando tienes una jerarquía de rutas anidadas, 
el <Outlet /> es el lugar donde se insertan y renderizan las rutas secundarias.

las rutas secundarias serian todas las envueltas por este componente en App.jsx

*/

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import PATH from './constants/pathRoutes';
import Navbar from './components/Navbar';

// funciona como un componente para no peritir el acceso a rutas protegidas
const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();

  // tiene que existir un 'loading' para que se re-renderize el componente
  // si no esta verificado redireccionamos al inicio de la aplicacion
  if (!loading && !isAuthenticated) return <Navigate to={PATH.LANDING} />;

  // si todo esta bien continua a la ruta establecida
  return (
    <div>
      <Navbar />
      <Outlet />;
    </div>
  );
};

export default ProtectedRoute;
