import { z } from 'zod';

export const fileSchema = z.object({
  id_file: z.string().uuid(),
  id_folder: z.string().uuid().nullable(),
  file_name: z.string(),
  url: z.string(),
  aws_key: z.string(),
});

export const createFileSchema = fileSchema
  .omit({
    id_file: true,
    aws_key: true,
    url: true,
  })
  .extend({
    file: z.instanceof(File, {
      message: 'El archivo debe ser un archivo válido',
    }),
  });

export type FileData = z.infer<typeof fileSchema>;
export type CreateFile = z.infer<typeof createFileSchema>;
