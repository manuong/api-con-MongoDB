import { useEffect, useState } from 'react';
import { getNoteRequest } from '../api/note';
import { useParams } from 'react-router-dom';

const useNoteDetail = () => {
  const [noteDetail, setNoteDetail] = useState({});
  const [errors, setErros] = useState([]);

  const { noteId } = useParams();

  useEffect(() => {
    getNoteRequest(noteId)
      .then((res) => {
        const { data } = res;

        if (typeof data.content === 'string') {
          data.content = data.content.replace(/\n/g, '<br>');
        }
        setNoteDetail(data);
      })
      .catch((error) => {
        setErros(error);
      });

    return () => {
      setNoteDetail({});
    };
  }, [noteId]);

  return { noteDetail, errors };
};

export default useNoteDetail;
