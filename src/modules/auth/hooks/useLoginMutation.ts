import { useForm } from 'react-hook-form';
import { login } from '../actions/auth';
import { useMutation } from '@tanstack/react-query';
import { loginSchema, type Login } from '../schemas/auth-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { showError } from '@/lib/showError';

export const useLoginMutation = () => {

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const loginMutation = useMutation({
    mutationFn: login,
    meta: {
      successMessage: "Bienvenido",
    }
  });

  const onSubmit = (data: Login) => loginMutation.mutate(data);
  
  const onError = (error: unknown) => showError(error);

  return {
    loginMutation,
    form,
    onSubmit,
    onError
  }
}
