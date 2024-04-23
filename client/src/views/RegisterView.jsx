/* 
* react-hook-form
 React Hook Form es una librería de React que te ayuda a hacer formularios de una manera más simple y eficiente.
En lugar de depender de métodos complicados para manejar tus formularios,

React Hook Form te permite usar ganchos (hooks) de React para manejar el estado y la validación de tus formularios de manera más directa. 

Esto significa que puedes escribir menos código y aún así tener formularios interactivos y robustos en tus 
aplicaciones React. Es una herramienta genial si quieres simplificar tu flujo de trabajo al trabajar con formularios 
en React.

site : https://react-hook-form.com/get-started
*/

import { useForm } from 'react-hook-form';

const RegisterView = () => {
  //
  // utilizamos el hook "useForm()"
  const { register, handleSubmit } = useForm();

  // tenemos los valores de cada imput 'values'
  const functionSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10">Registrate</h1>
      <form onSubmit={handleSubmit(functionSubmit)} className="flex flex-col items-center">
        <input
          placeholder="Username"
          type="text"
          {...register('username', { required: true })}
          className="w-96 h-12 m-4 bg-zinc-700 text-white rounded-lg px-2"
        />
        <input
          placeholder="Email"
          type="text"
          {...register('email', { required: true })}
          className="w-96 h-12 m-4 bg-zinc-700 text-white rounded-lg pl-2"
        />
        <input
          placeholder="Password"
          type="text"
          {...register('password', { required: true })}
          className="w-96 h-12 m-4 bg-zinc-700 text-white rounded-lg pl-2"
        />
        <button
          type="submit"
          className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-10"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
