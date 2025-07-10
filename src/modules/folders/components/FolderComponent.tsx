import { cn } from '../../../lib/utils';
import type { Folder } from '../schemas/folderSchemas';

type Props = {
  folder: Folder;
  isSelected: boolean;
  onClick: (folder: Folder) => void;
  onDoubleClick: (folder: Folder) => void;
};

export const FolderComponent = ({
  folder,
  isSelected,
  onClick,
  onDoubleClick,
}: Props) => {
  return (
    <div
      className={cn(`w-28 cursor-pointer`, {
        'bg-blue-500': isSelected,
      })}
      onClick={() => onClick(folder)}
      onDoubleClick={() => onDoubleClick(folder)}
    >
      <img
        className='w-28'
        src={'/assets/icons/folder.png'}
        alt={folder.folder_name}
      />
      <span
        className={cn('text-lg line-clamp-1 text-center', {
          'text-white': isSelected,
        })}
      >
        {folder.folder_name}
      </span>
    </div>
  );
};
