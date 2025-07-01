import { z } from 'zod';

export const userSchema = z.object({
  id_user: z.string(),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email('El email no es válido'),
});

export type User = z.infer<typeof userSchema>;
