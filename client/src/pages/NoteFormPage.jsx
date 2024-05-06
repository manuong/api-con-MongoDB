import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNoteContext } from '../hooks/useNoteContext';
import { useState } from 'react';

const NoteFormPage = () => {
  const { notes } = useNoteContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { noteId } = useParams();

  const noteCurrentData = notes.find((note) => note.id === noteId) || {};

  const [inputsValue, setInputsValues] = useState({
    title: noteCurrentData.title,
    content: noteCurrentData.content.replace(/<br>/g, '\n'), // '/<br>/g' es una exprecion regular,  que busca la cadena '<br>', La g al final de la expresión regular significa "global" esta para que busque todas las ocurrencias de la cadena en lugar de detenerse después de encontrar la primera coincidencia
    important: noteCurrentData.important,
  });

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setInputsValues({ ...inputsValue, [inputName]: inputValue });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl my-10">{noteId ? 'Editar note' : 'Crear Nota'}</h1>

      <form onSubmit={onSubmit} className="flex flex-col">
        <span className="text-red-600 h-6">{errors.title && 'Escribe un titulo'}</span>

        <input
          type="text"
          placeholder="Titulo"
          value={inputsValue.title}
          {...register('title', { required: true })}
          onChange={handleChange}
          className="bg-zinc-700  w-96 h-12 rounded-lg px-2 mb-5"
        />

        <span className="text-red-600 h-6">{errors.content && 'Escribe una descripción'}</span>

        <textarea
          rows="10"
          placeholder="Descripción"
          value={inputsValue.content}
          {...register('content', { required: true })}
          onChange={handleChange}
          className="bg-zinc-700  w-96 max-h-56 rounded-lg p-2 mb-5"
        ></textarea>

        <div className="w-96  flex items-center">
          <label className="text-2xl mx-3">Importante : </label>
          <input
            type="checkbox"
            checked={inputsValue.important}
            {...register('important')}
            onChange={handleChange}
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
