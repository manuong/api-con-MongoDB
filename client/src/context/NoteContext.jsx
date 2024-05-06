import { useEffect, useState } from 'react';
import { NoteContext } from '../hooks/useNoteContext';
import { createNoteRequest, deleteNoteRequest, getNotesRequest, updateNoteRequest } from '../api/note';

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [errors, setErrors] = useState([]);

  // funcion para traer todas las notas del usuario
  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      res.data.map((note) => {
        if (typeof note.content === 'string') {
          note.content = note.content.replace(/\n/g, '<br>');
        }
        return note;
      });
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
      setNotes((values) => [res.data, ...values]);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const updateNote = async (noteId, note) => {
    try {
      const res = await updateNoteRequest(noteId, note);
      if (res.status === 200) {
        const updatedNotes = [res.data, ...notes.filter((note) => note.id !== noteId)];
        setNotes(updatedNotes);
      }
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  // funcion para resetear notas
  const resetNotes = () => {
    setNotes([]);
  };

  // funcion para eliminar una nota
  const deleteNote = async (noteId) => {
    try {
      const res = await deleteNoteRequest(noteId);
      if (res.status === 200) {
        setNotes(notes.filter((note) => note.id !== noteId));
      }
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
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
        updateNote,
        resetNotes,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
