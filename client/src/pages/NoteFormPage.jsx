import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useNoteContext } from '../hooks/useNoteContext';
import { useEffect } from 'react';
import PATH from '../constants/pathRoutes';

const NoteFormPage = () => {
  const { notes, updateNote, createNote } = useNoteContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { noteId } = useParams();

  useEffect(() => {
    if (noteId) {
      const noteCurrentData = notes.find((note) => note.id === noteId);

      setValue('title', noteCurrentData.title);
      setValue('content', noteCurrentData.content.replace(/<br>/g, '\n'));
      setValue('important', noteCurrentData.important);
    }
  }, [setValue, noteId, notes]);

  const onSubmit = handleSubmit((values) => {
    if (noteId) {
      updateNote(noteId, values).then(() => {
        navigate(PATH.HOME);
      });
    } else {
      createNote(values).then(() => {
        navigate(PATH.HOME);
      });
    }
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl my-10">{noteId ? 'Editar note' : 'Crear Nota'}</h1>

      <form onSubmit={onSubmit} className="flex flex-col">
        <span className="text-red-600 h-6">{errors.title && 'Escribe un titulo'}</span>

        <input
          type="text"
          placeholder="Titulo"
          {...register('title', { required: true })}
          className="bg-zinc-700  w-96 h-12 rounded-lg px-2 mb-5"
        />

        <span className="text-red-600 h-6">{errors.content && 'Escribe una descripción'}</span>

        <textarea
          rows="10"
          placeholder="Descripción"
          {...register('content', { required: true })}
          className="bg-zinc-700  w-96 max-h-56 rounded-lg p-2 mb-5"
        ></textarea>

        <div className="w-96  flex items-center">
          <label className="text-2xl mx-3">Importante : </label>
          <input
            type="checkbox"
            {...register('important')}
            className="h-5 w-5 mt-2 bg-zinc-700 rounded-lg"
          />
        </div>

        <div className="mt-10 grid justify-center">
          <button
            className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-5"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteFormPage;
