import { useNoteContext } from '../hooks/useNoteContext';
import { useAuthContext } from '../hooks/useAuthContext';
import PATH from '../constants/pathRoutes';
import NoteCard from '../components/NoteCard';
import NavButton from '../components/NavButton';

const HomePage = () => {
  const { notes } = useNoteContext();
  const { user } = useAuthContext();

  return (
    <div className="flex">
      <div className="w-2/5">
        <h1 className="text-6xl m-6 ">Bienvenido</h1>
        <h2 className="text-4xl mx-6 mt-16">{user.name ? user.name : 'Sin definir nombre aun'}</h2>
        <p className="text-xl mx-6 mt-4"> {user.username}</p>
        <p className="text-xl mx-6 mt-2">{user.email}</p>
      </div>
      <div className="w-3/5 ">
        <div className="flex justify-between p-2 mt-10">
          <h2 className="text-4xl">Notas Recientes</h2>
          <div className="mr-16">
            <NavButton path={PATH.NOTE_FORM} name={'Nueva Nota'} />
          </div>
        </div>
        {notes.length > 0 ? (
          <div className="mt-4 flex flex-wrap justify-start">
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
          </div>
        ) : (
          <p>Sin notas aun</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
