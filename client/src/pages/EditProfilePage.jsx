import { useForm } from 'react-hook-form';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';

const EditProfilePage = () => {
  const { user } = useAuthContext();

  const [inputsValue, setInputsValues] = useState({
    name: user.name,
    username: user.username,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setInputsValues({ ...inputsValue, [inputName]: inputValue });
    console.log(inputsValue);
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-5xl mt-32 mb-10">Editar Perfil</h1>
      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Nombre"
          value={inputsValue.name}
          className="w-96 h-12 my-2 bg-zinc-700 rounded-lg px-2 mb-8"
          {...register('name')}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Nombre de usuario"
          value={inputsValue.username}
          className="w-96 h-12 my-2 bg-zinc-700 rounded-lg px-2"
          {...register('username', { required: true })}
          onChange={handleChange}
        />

        <span className="text-red-600 h-6">{errors.username && 'Escribe un nombre de usuario'}</span>

        <button
          type="submit"
          className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-5"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
