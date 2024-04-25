import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PATH from './constants/pathRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.LANDING} element={<LandingPage />} />
          <Route path={PATH.HOME} element={<h1>Home page</h1>} />
          <Route path={PATH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
          <Route path={PATH.NOTE} element={<h1>notes page</h1>} />
          <Route path={PATH.NOTE_DETAIL} element={<h1>update note</h1>} />
          <Route path={PATH.ADD_NOTE} element={<h1>Add notes</h1>} />
          <Route path={PATH.PROFILE} element={<h1>User Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
