import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PATH from './constants/pathRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import OnlyUnauthorized from './OnlyUnauthorized';
import NoteFormPage from './pages/NoteFormPage';
import NoteProvider from './context/NoteContext';
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import EditProfilePage from './pages/EditProfilePage';
import NoteEditPage from './pages/NoteEditPage';

const App = () => {
  return (
    <AuthProvider>
      <NoteProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<OnlyUnauthorized />}>
              <Route path={PATH.LANDING} element={<LandingPage />} />
              <Route path={PATH.LOGIN} element={<LoginPage />} />
              <Route path={PATH.REGISTER} element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path={PATH.HOME} element={<HomePage />} />
              <Route path={PATH.NOTES} element={<NotesPage />} />
              <Route path={PATH.NOTE_DETAIL} element={<h1>update note</h1>} />
              <Route path={PATH.NOTE_FORM} element={<NoteFormPage />} />
              <Route path={`${PATH.NOTE_EDIT}/:noteId`} element={<NoteEditPage />} />
              <Route path={PATH.PROFILE} element={<EditProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteProvider>
    </AuthProvider>
  );
};

export default App;

/* 

una funcionalidad de React Router V6 es poder anidar rutas

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>

en el componente <Layout />

return (
    <div className="container">
      <div className="sidebar">
        <h2>Menú de Navegación</h2>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
      <div className="content">
        <Outlet />   <---------------------- Aqui se renderizan las rutas secundarias / anidadas
      </div>
    </div>
  );

El componente <Outlet /> se utiliza para definir el punto de salida donde se 
renderizarán las rutas secundarias anidadas.
*/
