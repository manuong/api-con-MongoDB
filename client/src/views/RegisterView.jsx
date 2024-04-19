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

  return (
    <div className="flex">
      <h1>Registrate</h1>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input type="text" {...register('username', { required: true })} />
        <input type="text" {...register('email', { required: true })} />
        <input type="text" {...register('password', { required: true })} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterView;
