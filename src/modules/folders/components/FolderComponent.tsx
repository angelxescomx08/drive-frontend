import type { Folder } from '../schemas/folderSchemas';

export const FolderComponent = ({ folder }: { folder: Folder }) => {
  return (
    <div className='w-28 cursor-pointer'>
      <img
        className='w-28'
        src={'/assets/icons/folder.png'}
        alt={folder.folder_name}
      />
      <span className='text-2xl line-clamp-1 text-center'>
        {folder.folder_name}
      </span>
    </div>
  );
};
