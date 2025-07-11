import { useMutation } from '@tanstack/react-query';
import { deleteFile } from '../actions/file';

export const useDeleteFile = () => {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    meta: {
      successMessage: 'Archivo eliminado correctamente',
      errorMessage: 'Error al eliminar el archivo',
      invalidatesQuery: ['folder-content'],
    },
  });

  return {
    deleteFileMutation,
  };
};
