import { Link } from 'react-router-dom';

const NavButton = ({ path, name }) => {
  return (
    <Link to={path}>
      <button
        type="button"
        className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200"
      >
        {name}
      </button>
    </Link>
  );
};

export default NavButton;
