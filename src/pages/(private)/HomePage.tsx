import { ContextMenuComponent } from '../../components/ui/customs/context-menu';
import { Dropzone } from '../../components/ui/customs/dropzone';
import { Header } from '../../components/ui/customs/header';
import { useAuthStore } from '../../modules/auth/hooks/useAuthStore';
import { useCreateFile } from '../../modules/files/hooks/useCreateFile';
import { useCreateFolder } from '../../modules/folders/hooks/useCreateFolder';
import { useFolderContent } from '../../modules/folders/hooks/useFolderContent';

export const HomePage = () => {
  const { folderContent } = useFolderContent('root');
  const { createFolderMutation } = useCreateFolder();
  const { createFileMutation } = useCreateFile();
  const { user } = useAuthStore();

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <ContextMenuComponent>
          <div className='flex gap-4 mt-4'>
            <Dropzone
              onDrop={async event => {
                event.preventDefault();
                if (event.dataTransfer && event.dataTransfer.items) {
                  for (let i = 0; i < event.dataTransfer.items.length; i++) {
                    const item = event.dataTransfer.items[i];
                    if (item.webkitGetAsEntry) {
                      const entry = item.webkitGetAsEntry();
                      if (entry?.isDirectory) {
                        createFolderMutation.mutate({
                          folder_name: entry?.name ?? '',
                          id_parent: null,
                          id_user: user?.id_user ?? '',
                        });
                      }
                      if (entry?.isFile) {
                        const file = await new Promise<File>(resolve => {
                          (entry as FileSystemFileEntry).file(file =>
                            resolve(file)
                          );
                        });
                        createFileMutation.mutate({
                          file_name: entry?.name ?? '',
                          id_folder: null,
                          file,
                        });
                      }
                    }
                  }
                }
              }}
            >
              {folderContent.data.folders.map(folder => (
                <div key={folder.id_folder} className='w-28 cursor-pointer'>
                  <img
                    className='w-28'
                    src={'/assets/icons/folder.png'}
                    alt={folder.folder_name}
                  />
                  <span className='text-2xl line-clamp-1 text-center'>
                    {folder.folder_name}
                  </span>
                </div>
              ))}
              {folderContent.data.files.map(file => (
                <div key={file.id_file} className='w-28 cursor-pointer'>
                  <img
                    className='w-28'
                    src={'/assets/icons/file.png'}
                    alt={file.file_name}
                  />
                  <span className='text-2xl line-clamp-1 text-center'>
                    {file.file_name}
                  </span>
                </div>
              ))}
            </Dropzone>
          </div>
        </ContextMenuComponent>
      </main>
    </>
  );
};
