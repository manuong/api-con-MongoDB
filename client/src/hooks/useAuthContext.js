import { useContext, createContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

export const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext deberia estar dentro de AuthProvider');
  return context;
};
