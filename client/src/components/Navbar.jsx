import PATH from '../constants/pathRoutes';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNoteContext } from '../hooks/useNoteContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const { resetNotes } = useNoteContext();

  const onClick = () => {
    // funcion async
    logout().then(() => {
      resetNotes();
    });
  };

  return (
    <div className="bg-zinc-900 h-16 p-3 flex items-center justify-between">
      <h1>Notes API</h1>

      <ul className="w-2/6 flex justify-around items-center">
        <Link to={PATH.HOME}>
          <li>Inicio</li>
        </Link>

        <Link to={PATH.NOTES}>
          <li>Mis notas</li>
        </Link>

        <li>
          <button type="button" onClick={onClick}>
            Cerrar sesión
          </button>
        </li>

        <li className="flex items-center">
          <ion-icon size="large" name="person-circle-outline"></ion-icon>
          <span className="mx-2">{user.name ? user.name.split(' ')[0] : 'Sin definir'}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
