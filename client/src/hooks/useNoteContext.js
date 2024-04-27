import { createContext, useContext } from 'react';

export const NoteContext = createContext();

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error('useNoteContext deberia esta dentro de NoteProvider');
  return context;
};
