import { Link } from 'react-router-dom';
import PATH from '../constants/pathRoutes';

const NoteCard = ({ title, content, important, noteId }) => {
  let smallTitle = null;
  let smallContent = null;

  if (title.length > 29) {
    smallTitle = title.split('').slice(0, 26).concat(' ...').join('');
  }
  if (content.length > 270) {
    smallContent = content.split('').slice(0, 266).concat(' ...').join('');
  }
  return (
    <Link to={`${PATH.NOTES}/${noteId}`}>
      <div className="bg-zinc-700 w-96 h-60 border-2 border-green-700 rounded-lg m-2">
        <div className="bg-zinc-900 rounded-t-lg h-12 flex items-center justify-between p-2">
          <h1 className="text-xl">{smallTitle ? smallTitle : title}</h1>
          {important && (
            <div className="w-24 px-2 rounded-lg border-2 border-green-700 text-green-700">
              importante
            </div>
          )}
        </div>

        {/* explicacion en componente 'NoteDetailPage', esto para visualizar los saltos de linea */}
        <p dangerouslySetInnerHTML={{ __html: smallContent ? smallContent : content }} />
      </div>
    </Link>
  );
};

export default NoteCard;
