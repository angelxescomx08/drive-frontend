import { useMutation } from '@tanstack/react-query';
import { deleteFolder } from '../actions/foldersActions';

export const useDeleteFolder = () => {
  const deleteFolderMutation = useMutation({
    mutationFn: deleteFolder,
    meta: {
      successMessage: 'Carpeta eliminada correctamente',
      errorMessage: 'Error al eliminar la carpeta',
      invalidatesQuery: ['folder-content'],
    },
  });

  return {
    deleteFolderMutation,
  };
};
