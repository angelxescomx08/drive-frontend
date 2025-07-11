import { api } from '../../../lib/api';
import { type CreateFile } from '../schemas/filesSchemas';

export async function createFile(file: CreateFile) {
  const formData = new FormData();

  formData.append('file', file.file);
  formData.append('file_name', file.file_name);
  formData.append('id_folder', `${file.id_folder}`);

  const { data } = await api.post('/file', formData);
  return data;
}

export async function deleteFile(id_file: string) {
  const { data } = await api.delete(`/file/${id_file}`);
  return data;
}
