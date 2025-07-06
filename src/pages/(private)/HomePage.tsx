import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { ContextMenuComponent } from '../../components/ui/customs/context-menu';
import { Dropzone } from '../../components/ui/customs/dropzone';
import { Header } from '../../components/ui/customs/header';
import { useAuthStore } from '../../modules/auth/hooks/useAuthStore';
import { FileComponent } from '../../modules/files/components/FileComponent';
import { useCreateFile } from '../../modules/files/hooks/useCreateFile';
import { FolderComponent } from '../../modules/folders/components/FolderComponent';
import { useCreateFolder } from '../../modules/folders/hooks/useCreateFolder';
import { useFolderContent } from '../../modules/folders/hooks/useFolderContent';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const idFolder = searchParams.get('id_folder');
  const [currentFolder, setCurrentFolder] = useState<string>(
    idFolder ?? 'root'
  );

  const { folderContent } = useFolderContent(currentFolder);
  const { createFolderMutation } = useCreateFolder();
  const { createFileMutation } = useCreateFile();
  const { user } = useAuthStore();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        const item = event.dataTransfer.items[i];
        if (item.webkitGetAsEntry) {
          const entry = item.webkitGetAsEntry();
          if (entry?.isDirectory) {
            createFolderMutation.mutate({
              folder_name: entry?.name ?? '',
              id_parent: currentFolder,
              id_user: user?.id_user ?? '',
            });
          }
          if (entry?.isFile) {
            const file = await new Promise<File>(resolve => {
              (entry as FileSystemFileEntry).file(file => resolve(file));
            });
            createFileMutation.mutate({
              file_name: entry?.name ?? '',
              id_folder: currentFolder,
              file,
            });
          }
        }
      }
    }
  };

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <ContextMenuComponent>
          <div className='flex gap-4 mt-4'>
            <Dropzone onDrop={handleDrop}>
              {folderContent.data.folders.map(folder => (
                <FolderComponent
                  key={folder.id_folder}
                  folder={folder}
                  onClick={() => {
                    setCurrentFolder(folder.id_folder);
                    setSearchParams({ id_folder: folder.id_folder });
                  }}
                />
              ))}
              {folderContent.data.files.map(file => (
                <FileComponent key={file.id_file} file={file} />
              ))}
            </Dropzone>
          </div>
        </ContextMenuComponent>
      </main>
    </>
  );
};
