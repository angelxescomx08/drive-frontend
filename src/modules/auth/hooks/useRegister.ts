import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { showError } from '../../../lib/showError';
import { register } from '../actions/auth';
import { registerSchema, type Register } from '../schemas/auth-schemas';

export const useRegister = () => {
  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: Register) => {
      const response = await register(data);
      return response;
    },
    meta: {
      successMessage: 'Usuario registrado correctamente',
      errorMessage: 'Error al registrar usuario',
    },
  });

  const onSubmit = (data: Register) => registerMutation.mutate(data);

  const onError = (error: unknown) => showError(error);

  return {
    form,
    registerMutation,
    onSubmit,
    onError,
  };
};
