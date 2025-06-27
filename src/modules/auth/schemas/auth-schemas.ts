import { z } from 'zod';
import { userSchema } from '@/modules/users/schemas/user-schema';

export const loginSchema = userSchema.omit({
  id: true,
});

export type Login = z.infer<typeof loginSchema>;