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
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../constants/pathRoutes';
const RegisterView = () => {
  //
  // utilizamos el hook "useForm()"
  const {
    register,
    handleSubmit,
    formState: { errors }, // esta es una de encontrar detructuracion
  } = useForm();

  // hook personalizado para utlizar el contexto de Autenticacion
  // const { signup, user } = useAuth();
  const { signup, isAuthenticated, errors: authErrors } = useAuthContext();

  const navigate = useNavigate();

  // tenemos los valores de cada imput en 'values'
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate(PATH.HOME);
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10">Registrate</h1>

      {authErrors.map((error, i) => {
        return (
          <div key={i} className="bg-red-600 text-white w-96 p-2 mb-3">
            {error}
          </div>
        );
      })}

      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          placeholder="Username"
          type="text"
          {...register('username', { required: true })}
          className="w-96 h-12 my-2 bg-zinc-700 text-white rounded-lg px-2"
        />

        <span className="text-red-600 h-6">{errors.username && 'User name es requerido'}</span>

        <input
          placeholder="Email"
          type="email"
          {...register('email', { required: true })}
          className="w-96 h-12 my-2 bg-zinc-700 text-white rounded-lg pl-2"
        />

        <span className="text-red-600 h-6">{errors.email && 'Email es requerido'}</span>

        <input
          placeholder="Password"
          type="password"
          {...register('password', { required: true })}
          className="w-96 h-12 my-2 bg-zinc-700 text-white rounded-lg pl-2"
        />

        <span className="text-red-600 h-6">{errors.password && 'Password es requerido'}</span>

        <div className="grid justify-items-center">
          <button
            type="submit"
            className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-10"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;
