import { useNoteContext } from '../hooks/useNoteContext';
import { Link } from 'react-router-dom';
import PATH from '../constants/pathRoutes';
import NoteCard from '../components/NoteCard';

const HomePage = () => {
  const { notes } = useNoteContext();

  return (
    <div>
      <h1>HOME</h1>
      <div>
        <Link to={PATH.NOTE_FORM}>
          <button
            type="button"
            className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-5"
          >
            Nueva Nota
          </button>
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                title={note.title}
                content={note.content}
                important={note.important}
              />
            );
          })}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
