import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import Landing from './views/Landing';
import { AuthProvider } from './context/AuthContext';
import PATH from './constants/pathRoutes';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path={PATH.HOME} element={<h1>Home page</h1>} />
          <Route path={PATH.LOGIN} element={<LoginView />} />
          <Route path={PATH.REGISTER} element={<RegisterView />} />
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
