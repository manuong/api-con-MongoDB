import NavButton from '../components/NavButton';
import NoteListItem from '../components/NoteListItem';
import PATH from '../constants/pathRoutes';
import { useNoteContext } from '../hooks/useNoteContext';

const NotesPage = () => {
  const { notes } = useNoteContext();

  return (
    <div>
      <div className="p-10 flex items-center justify-between">
        <h1 className="text-4xl">Mis Notas</h1>
        <NavButton path={PATH.NOTE_FORM} name={'Nueva Nota'} />
      </div>
      <div className="flex flex-col items-center">
        <ul className="bg-zinc-900 w-11/12 h-12 rounded-t-lg flex items-center">
          <li className=" px-5 w-3/12">Titulo</li>
          <li className="px-5 w-6/12">Descripción</li>
        </ul>
      </div>
      {notes.map((note) => {
        const { id, title, content, important } = note;
        return <NoteListItem key={id} title={title} content={content} important={important} />;
      })}
    </div>
  );
};

export default NotesPage;
