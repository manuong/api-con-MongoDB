import { Link } from 'react-router-dom';
import PATH from '../constants/pathRoutes';

const NoteListItem = ({ title, content, important, noteId, onClick }) => {
  let smallTitle = null;
  let smallContent = null;

  if (title.length > 39) {
    smallTitle = title.split('').slice(0, 36).concat(' ...').join('');
  }
  if (content.length > 79) {
    smallContent = content.split('').slice(0, 76).concat(' ...').join('');
  }

  return (
    <div className="flex flex-col items-center">
      <ul className="bg-zinc-800 w-11/12 h-12 flex items-center">
        <li className=" border-zinc-700 px-5 w-3/12">{smallTitle ? smallTitle : title}</li>
        <li className=" border-zinc-700 px-5 w-6/12">{smallContent ? smallContent : content}</li>

        <li className="px-5 w-2/12">
          {important && (
            <div className="w-24 px-2 rounded-lg border-2 border-green-700 text-green-700">
              importante
            </div>
          )}
        </li>

        <Link to={`${PATH.NOTE_EDIT}/${noteId}`}>
          <button className="bg-sky-700 w-6 h-6 flex items-center justify-center rounded-sm">
            <ion-icon size="small" name="create-outline"></ion-icon>
          </button>
        </Link>
        <button
          onClick={() => onClick(noteId)}
          className="bg-red-600 w-6 h-6 flex items-center justify-center rounded-sm mx-6"
        >
          <ion-icon size="small" name="trash-outline"></ion-icon>
        </button>
      </ul>
    </div>
  );
};

export default NoteListItem;
