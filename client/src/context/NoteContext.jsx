import { useState } from 'react';
import { NoteContext } from '../hooks/useNoteContext';

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState();

  // funcion para crear una nueva tarea
  const createNote = (note) => {
    console.log(note);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        createNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
