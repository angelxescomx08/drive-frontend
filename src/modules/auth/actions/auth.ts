import { api } from '@/lib/api';
import type { User } from '../../users/schemas/user-schema';
import { type Login, type Register } from '../schemas/auth-schemas';

type LoginResponse = {
  message: string;
  token: string;
  user: User;
};

export async function login(loginData: Login): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/user/login', loginData);
  return data;
}

type RegisterResponse = {
  message: string;
  user: User;
};

export async function register(
  registerData: Register
): Promise<RegisterResponse> {
  const { data } = await api.post<RegisterResponse>('/user', registerData);
  return data;
}

type GetMeResponse = {
  message: string;
  user: User;
};

export async function getMe(): Promise<User> {
  const { data } = await api.get<GetMeResponse>('/user/me');
  return data.user;
}
