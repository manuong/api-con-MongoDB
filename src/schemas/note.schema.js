const { z } = require('zod');

const noteSchema = z.object({
  title: z
    .string({
      required_error: 'El titulo es requerido',
    })
    .min(1, 'El titulo no puede estar vacio'),
  content: z
    .string({
      required_error: 'El contenido es requerido',
    })
    .min(1, {
      message: 'El contenido no puede estar vacio',
    }),
  important: z
    .boolean({
      message: 'Se espera un booleaono',
    })
    .optional(),
});

module.exports = { noteSchema };
