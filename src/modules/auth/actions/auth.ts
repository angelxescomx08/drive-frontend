import { api } from '@/lib/api';
import { type Login } from '../schemas/auth-schemas';

export async function login(loginData: Login) {
  const { data } = await api.post('/auth/login', loginData);
  return data;
}