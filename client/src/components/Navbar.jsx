import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const onClick = () => {
    logout(); // funcion async
  };

  return (
    <div className="bg-zinc-900 h-16 p-3 flex items-center justify-between">
      <h1>Notes API</h1>

      <ul className="w-2/4 flex justify-around">
        <li>Home</li>
        <li>Mis notas</li>
        <li>
          <button type="button" onClick={onClick}>
            Cerrar sesión
          </button>
        </li>
        <li>Icono</li>
        <li>{user.name && user.name.split(' ')[0]}</li>
      </ul>
    </div>
  );
};

export default Navbar;
