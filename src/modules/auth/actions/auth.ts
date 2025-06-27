import { api } from '@/lib/api';
import type { User } from '../../users/schemas/user-schema';
import { type Login } from '../schemas/auth-schemas';

type LoginResponse = {
  message: string;
  token: string;
  user: User;
};

export async function login(loginData: Login): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/user/login', loginData);
  return data;
}
