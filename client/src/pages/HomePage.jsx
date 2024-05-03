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
      <div className="w-2/5 p-6">
        <h1 className="text-6xl mt-2">Bienvenido</h1>
        <h2 className="text-4xl  mt-16">{user.name ? user.name : 'Sin definir nombre aun'}</h2>
        <div className=" mt-4">
          <spam className="text-xl mr-2"> {user.username}</spam>
          <ion-icon name="globe-outline"></ion-icon>
        </div>
        <div className=" mt-2">
          <spam className="text-xl mr-2">{user.email}</spam>
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div className="mt-10">
          <NavButton path={PATH.PROFILE} name={'Editar perfil'} />
        </div>
      </div>
      <div className="w-3/5 pl-12">
        <div className="flex justify-between p-2 mt-10">
          <h2 className="text-4xl">Notas Recientes</h2>
          {notes.length > 0 && (
            <div className="mr-5">
              <NavButton path={PATH.NOTE_FORM} name={'Nueva Nota'} />
            </div>
          )}
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
          <div className="mt-20 flex flex-col items-center justify-center">
            <p className="text-xl text-zinc-600 mb-6"> no tienes notas aun, crea una </p>
            <NavButton path={PATH.NOTE_FORM} name={'Nueva Nota'} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
