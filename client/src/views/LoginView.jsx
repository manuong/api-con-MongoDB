import { useForm } from 'react-hook-form';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../constants/pathRoutes';

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: authErrors } = useAuthContext();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    signin(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate(PATH.HOME);
  }, [isAuthenticated, navigate]);

  console.log(errors);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10">Inicio de Sesión</h1>

      {authErrors.map((error, i) => {
        return (
          <div key={i} className="bg-red-600 text-white w-96 p-2 mb-3">
            {error}
          </div>
        );
      })}

      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          placeholder="Email o username"
          type="text"
          {...register('emailOrUsername', { required: true })}
          className="w-96 h-12 my-2 bg-zinc-700 text-white rounded-lg px-2"
        />

        <span className="text-red-600 h-6">
          {errors.emailOrUsername && 'Email o username es requerido'}
        </span>

        <input
          placeholder="password"
          type="password"
          {...register('password', { required: true })}
          className="w-96 h-12 my-2 bg-zinc-700 text-white rounded-lg px-2"
        />

        <span className="text-red-600 h-6">{errors.password && 'La contraseña es requerida'}</span>

        <div className="grid justify-items-center">
          <button
            type="submit"
            className="bg-blue-600 rounded-lg w-28 h-10 border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200 mt-10"
          >
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
