import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Dropzone({ children }: Props) {
  return (
    <div className='w-full h-[calc(100vh-8rem)] border rounded-md shadow-lg flex gap-4 p-4'>
      {children}
    </div>
  );
}
