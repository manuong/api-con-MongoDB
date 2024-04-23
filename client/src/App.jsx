import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import Landing from './views/Landing';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/note" element={<h1>notes page</h1>} />
          <Route path="/note/:noteId" element={<h1>update note</h1>} />
          <Route path="/add-note" element={<h1>Add notes</h1>} />
          <Route path="/profile" element={<h1>User Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
