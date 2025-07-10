import type { Folder } from '../schemas/folderSchemas';

type Props = {
  folder: Folder;
  onClick: (folder: Folder) => void;
};

export const FolderComponent = ({ folder, onClick }: Props) => {
  return (
    <div className='w-28 cursor-pointer' onClick={() => onClick(folder)}>
      <img
        className='w-28'
        src={'/assets/icons/folder.png'}
        alt={folder.folder_name}
      />
      <span className='text-lg line-clamp-1 text-center'>
        {folder.folder_name}
      </span>
    </div>
  );
};
