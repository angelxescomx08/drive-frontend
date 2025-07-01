import { Dropzone } from '../../components/ui/customs/dropzone';
import { Header } from '../../components/ui/customs/header';
import { useFolderContent } from '../../modules/folders/hooks/useFolderContent';

export const HomePage = () => {
  const { folderContent } = useFolderContent('root');

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <div className='flex gap-4 mt-4'>
          <Dropzone>
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
      </main>
    </>
  );
};
