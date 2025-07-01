import { Package } from 'lucide-react';

export function Header() {
  return (
    <header className='flex justify-between items-center border-b border-gray-200 shadow-lg p-4'>
      <div className='flex items-center gap-2'>
        <Package />
        <h1 className='text-2xl font-bold'>Drive app</h1>
      </div>
    </header>
  );
}
