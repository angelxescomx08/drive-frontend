import type { FileData } from '../schemas/filesSchemas';

type Props = {
  file: FileData;
  onClick: (file: FileData) => void;
  onDoubleClick: (file: FileData) => void;
};

export const FileComponent = ({ file, onClick, onDoubleClick }: Props) => {
  return (
    <div
      className='w-28 cursor-pointer'
      onClick={() => onClick(file)}
      onDoubleClick={() => onDoubleClick(file)}
    >
      <img
        className='w-28'
        src={'/assets/icons/file.png'}
        alt={file.file_name}
      />
      <span className='text-lg line-clamp-1 text-center'>{file.file_name}</span>
    </div>
  );
};
