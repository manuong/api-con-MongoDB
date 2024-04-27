import { useEffect, useState } from 'react';
import { NoteContext } from '../hooks/useNoteContext';
import { createNoteRequest, getNotesRequest } from '../api/note';

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // funcion para traer todas las notas del usuario
  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // funcion para crear una nueva nota
  const createNote = async (note) => {
    try {
      const res = await createNoteRequest(note);
      setNotes((values) => [...values, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        createNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
