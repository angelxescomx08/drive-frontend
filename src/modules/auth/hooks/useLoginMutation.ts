import { showError } from '@/lib/showError';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { login } from '../actions/auth';
import { loginSchema, type Login } from '../schemas/auth-schemas';
import { useAuthStore } from './useAuthStore';

export const useLoginMutation = () => {
  const { setUser } = useAuthStore();
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: Login) => {
      const response = await login(data);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return response;
    },
    meta: {
      successMessage: 'Bienvenido',
    },
  });

  const onSubmit = (data: Login) => loginMutation.mutate(data);

  const onError = (error: unknown) => showError(error);

  return {
    loginMutation,
    form,
    onSubmit,
    onError,
  };
};
