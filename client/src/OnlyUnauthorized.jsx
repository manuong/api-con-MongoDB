import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import PATH from './constants/pathRoutes';

// funciona como un componente para ya no permitir el acceso si ya no es necesario autenticarse
const OnlyUnauthorized = () => {
  const { loading, isAuthenticated } = useAuthContext();

  const { pathname } = useLocation();

  if (loading) return <h1> </h1>;

  if (!loading && isAuthenticated) {
    if (pathname === PATH.LANDING || pathname === PATH.LOGIN || pathname === PATH.REGISTER) {
      return <Navigate to={PATH.HOME} />;
    }
  }

  return <Outlet />;
};

export default OnlyUnauthorized;
