import { userSchema } from '@/modules/users/schemas/user-schema';
import { z } from 'zod';

export const loginSchema = userSchema
  .omit({
    id: true,
  })
  .extend({
    password: z
      .string({
        required_error: 'La contraseña es requerida',
      })
      .min(1, 'La contraseña debe tener al menos 8 caracteres'),
  });

export type Login = z.infer<typeof loginSchema>;
