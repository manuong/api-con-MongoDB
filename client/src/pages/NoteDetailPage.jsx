import { Link } from 'react-router-dom';
import useNoteDetail from '../hooks/useNoteDetail';
import { useNoteContext } from '../hooks/useNoteContext';
import PATH from '../constants/pathRoutes';

const NoteDetailPage = () => {
  const { deleteNote } = useNoteContext();

  const { noteDetail } = useNoteDetail();
  const { title, content, important, id: noteId } = noteDetail;

  const onClick = () => {
    deleteNote(noteId);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-zinc-700 w-2/4 min-h-96 mt-16 mr-7 border-2 border-green-700 rounded-lg ">
        <div className="bg-zinc-900 rounded-t-lg flex items-center justify-between p-2">
          <h1 className="text-xl m-2">{title}</h1>
          {important && (
            <div className="w-24 px-2 rounded-lg border-2 border-green-700 text-green-700">
              importante
            </div>
          )}
        </div>

        {/* explicacion abajo, esto para visualizar los saltos de linea */}
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="mt-16">
        <Link to={`${PATH.NOTE_EDIT}/${noteId}`}>
          <button className="bg-sky-700 w-12 h-12 flex items-center justify-center rounded-lg">
            <ion-icon size="large" name="create-outline"></ion-icon>
          </button>
        </Link>
        <button
          onClick={onClick}
          className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-lg mt-8"
        >
          <ion-icon size="large" name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default NoteDetailPage;

/* 

dangerouslySetInnerHTML es una propiedad especial de JSX en React que permite establecer el contenido HTML 
de un elemento de manera "peligrosa". Se llama "peligroso" porque React normalmente protege contra la inyección
de HTML no controlado en la interfaz de usuario para evitar ataques XSS (Cross-Site Scripting). Sin embargo, 
en ciertos casos, puede ser necesario insertar HTML de manera dinámica, y dangerouslySetInnerHTML proporciona 
una forma de hacerlo.

Cuando utilizas dangerouslySetInnerHTML, estás indicando explícitamente a React que el contenido HTML que estás 
proporcionando ya ha sido sanitizado y que puede ser renderizado de forma segura.

En el ejemplo anterior, la sanitización del contenido se realiza indirectamente a través del reemplazo de 
ciertos caracteres especiales con sus entidades HTML correspondientes antes de insertar el contenido en el 
DOM utilizando dangerouslySetInnerHTML

  if (typeof data.content === 'string') {
          data.content = data.content.replace(/\n/g, '<br>'); ------> se utiliza para reemplazar todos los saltos de línea (\n) en el texto con la etiqueta HTML <br>
        }

este codigo esta en la peticion al utilizar 'useNoteDetail' puede considerarse una forma básica de evitar problemas 
de seguridad al permitir la inserción de HTML directamente en el DOM. Sin embargo, es importante tener en cuenta 
que esta técnica no es completamente segura y no proporciona protección contra otros tipos de ataques XSS.
*/
