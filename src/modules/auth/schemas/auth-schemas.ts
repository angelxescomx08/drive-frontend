import { userSchema } from '@/modules/users/schemas/user-schema';
import { z } from 'zod';

export const loginSchema = userSchema
  .omit({
    id_user: true,
  })
  .extend({
    password: z
      .string({
        required_error: 'La contraseña es requerida',
      })
      .min(1, 'La contraseña debe tener al menos 8 caracteres'),
  });

export const registerSchema = loginSchema
  .extend({
    repeatPassword: z.string({
      required_error: 'La contraseña es requerida',
    }),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['repeatPassword'],
  });

export type Login = z.infer<typeof loginSchema>;
export type Register = z.infer<typeof registerSchema>;
