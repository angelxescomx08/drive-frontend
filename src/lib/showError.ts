import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const showError = (error: unknown) => {
  if (error instanceof AxiosError)
    return toast.error(error.response?.data.error);

  if (error instanceof String) return toast.error(error);

  if (error instanceof Error) return toast.error(error.message);

  return toast.error('Ocurrió un error inesperado');
};
