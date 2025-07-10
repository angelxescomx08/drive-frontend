import { cn } from '../../../lib/utils';
import type { FileData } from '../schemas/filesSchemas';

type Props = {
  file: FileData;
  isSelected: boolean;
  onClick: (file: FileData) => void;
  onDoubleClick: (file: FileData) => void;
};

export const FileComponent = ({
  file,
  isSelected,
  onClick,
  onDoubleClick,
}: Props) => {
  return (
    <div
      className={cn(`w-28 cursor-pointer`, {
        'bg-blue-500': isSelected,
      })}
      onClick={() => onClick(file)}
      onDoubleClick={() => onDoubleClick(file)}
    >
      <img
        className='w-28'
        src={'/assets/icons/file.png'}
        alt={file.file_name}
      />
      <span
        className={cn('text-lg line-clamp-1 text-center', {
          'text-white': isSelected,
        })}
      >
        {file.file_name}
      </span>
    </div>
  );
};
