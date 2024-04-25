// utilizando el framework "zod" para validaciones de datos
const { z } = require('zod');

// "z" es un objeto que nos va a permitir dar tipos de datos

// para validar el objeto que nos llega por body al registrarse un nuevo usuario, definimos los datos
const registerSchema = z.object({
  username: z
    .string({
      required_error: 'El nombre de usuario es requerido', // mensaje cuando es una dato requerido
    }) // se puede definir longitud minima de caracteres
    .min(3, {
      message: 'El nombre de usuario es muy corto',
    }),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'email invalido', // mensaje de error si falla la validacion
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña debe contener minimo 6 caracteres',
    }),
});

const loginSchema = z.object({
  emailOrUsername: z.string({ required_error: 'email o username es requerido' }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña debe contener minimo 6 caracteres',
    }),
}); // metodo .refine() para hacer validaciones complejas, personalizadas o condiciones adicionales a las que ya tiene "zod"
// .refine(
//   (data) => {
//     if (data.username || data.email) {
//       return true;
//     } else return false;
//   },
//   {
//     message: 'Se requiere nombre de usuario o email',
//   }
// );

module.exports = {
  registerSchema,
  loginSchema,
};
