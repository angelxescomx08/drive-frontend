import { useMutation } from '@tanstack/react-query';
import { createFolder } from '../actions/foldersActions';

export const useCreateFolder = () => {
  const createFolderMutation = useMutation({
    mutationFn: createFolder,
    meta: {
      successMessage: 'Carpeta creada correctamente',
      errorMessage: 'Error al crear la carpeta',
      invalidatesQuery: ['folder-content'],
    },
  });

  return {
    createFolderMutation,
  };
};
