import NoteListItem from '../components/NoteListItem';
import { useNoteContext } from '../hooks/useNoteContext';

const NotesPage = () => {
  const { notes } = useNoteContext();

  return (
    <div>
      <h1 className="text-4xl m-10">Mis Notas</h1>
      <div className="flex flex-col items-center">
        <ul className="bg-zinc-900 w-11/12 h-12 rounded-t-lg flex items-center">
          <li className=" px-5 w-3/12">Titulo</li>
          <li className="px-5 w-6/12">Descripción</li>
          {/* <li className="px-5 w-3/12">Importante</li> */}
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
