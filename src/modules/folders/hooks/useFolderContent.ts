import { useSuspenseQuery } from '@tanstack/react-query';
import { getFolderContent } from '../actions/foldersActions';

export const useFolderContent = (id_folder: string) => {
  const folderContent = useSuspenseQuery({
    queryKey: ['folder-content', { id_folder }],
    queryFn: () => getFolderContent(id_folder),
  });

  return {
    folderContent,
  };
};
