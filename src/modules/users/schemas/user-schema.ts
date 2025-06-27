import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email('El email no es válido'),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(1, 'La contraseña debe tener al menos 8 caracteres'),
});

export type User = z.infer<typeof userSchema>;
