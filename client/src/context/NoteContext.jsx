import { useEffect, useState } from 'react';
import { NoteContext } from '../hooks/useNoteContext';
import { createNoteRequest, getNotesRequest } from '../api/note';

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [errors, setErrors] = useState([]);

  // funcion para traer todas las notas del usuario
  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(res.data);
    } catch (error) {
      if (error.response.status === 401) {
        setNotes([]);
      }
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  // funcion para crear una nueva nota
  const createNote = async (note) => {
    try {
      const res = await createNoteRequest(note);
      setNotes((values) => [...values, res.data]);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  // funcion para resetear notas
  const resetNotes = () => {
    setNotes([]);
  };

  // para traer las notas de la base de datos
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        errors,
        notes,
        getNotes,
        createNote,
        resetNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
