import type { DragEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
};

export function Dropzone({ children, onDrop }: Props) {
  return (
    <div
      className='w-full h-[calc(100vh-8rem)] border rounded-md shadow-lg flex gap-4 p-4 items-start justify-start flex-wrap'
      onDragOver={e => {
        e.preventDefault();
      }}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}
