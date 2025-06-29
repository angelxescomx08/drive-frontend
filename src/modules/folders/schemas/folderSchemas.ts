import { z } from 'zod';

export const folderSchema = z.object({
  id_folder: z.string().uuid(),
  id_parent: z.string().uuid().nullable(),
  id_user: z.string().uuid(),
  folder_name: z.string().min(1),
});

export const createFolderSchema = folderSchema.omit({
  id_folder: true,
});

export type Folder = z.infer<typeof folderSchema>;
export type CreateFolder = z.infer<typeof createFolderSchema>;
