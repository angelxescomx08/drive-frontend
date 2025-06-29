import { api } from '../../../lib/api';
import type { FileData } from '../../files/schemas/filesSchemas';
import type { Folder } from '../schemas/folderSchemas';
// import { createFolderSchema } from '../schemas/folderSchemas';

type FolderContentResponse = {
  message: string;
  folders: Folder[];
  files: FileData[];
};

export async function getFolderContent(id_folder: string) {
  const { data } = await api.get<FolderContentResponse>(
    `/folders/content/${id_folder}`
  );
  return data;
}

// export async function createFolder(folder: createFolderSchema) {
//   const response = await api.post('/folders', folder);
//   return response.data;
// }
