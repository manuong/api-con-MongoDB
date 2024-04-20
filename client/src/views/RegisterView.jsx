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
  const { register, handleSubmit } = useForm();

  const functionSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-10 mt-36">Registrate</h1>
      <form onSubmit={handleSubmit(functionSubmit)} className="flex flex-col items-center">
        <input
          placeholder="Username"
          type="text"
          {...register('username', { required: true })}
          className="w-80 h-8 m-2"
        />
        <input
          placeholder="Email"
          type="text"
          {...register('email', { required: true })}
          className="w-80 h-8 m-2"
        />
        <input
          placeholder="Password"
          type="text"
          {...register('password', { required: true })}
          className="w-80 h-8 m-2"
        />
        <button type="submit" className="bg-green-500 w-28 h-10 hover:rounded-lg duration-200 mt-10">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
