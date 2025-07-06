import type { FileData } from '../schemas/filesSchemas';

export const FileComponent = ({ file }: { file: FileData }) => {
  return (
    <div className='w-28 cursor-pointer'>
      <img
        className='w-28'
        src={'/assets/icons/file.png'}
        alt={file.file_name}
      />
      <span className='text-2xl line-clamp-1 text-center'>
        {file.file_name}
      </span>
    </div>
  );
};
