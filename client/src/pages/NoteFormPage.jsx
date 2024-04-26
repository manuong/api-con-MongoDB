import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PATH from '../constants/pathRoutes';

const NoteFormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link to={PATH} className="text-2xl font-bold text-sky-700 absolute left-16 top-16">
        volver
      </Link>

      <h1 className="text-5xl mb-10">Nota</h1>

      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Titulo"
          className="bg-zinc-700  w-96 h-12 rounded-lg px-2 mb-8"
          {...register('title')}
        />

        <textarea
          rows="10"
          placeholder="Descripción"
          className="bg-zinc-700  w-96 max-h-56 rounded-lg p-2 mb-5"
          {...register('content')}
        ></textarea>

        <div className="w-96  flex items-center">
          <label className="text-2xl mx-3">Importante : </label>
          <input
            type="checkbox"
            className="h-5 w-5 mt-2 bg-zinc-700 rounded-lg"
            {...register('important')}
          />{' '}
        </div>

        <div className="mt-10">
          <button
            className='bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-5"'
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
