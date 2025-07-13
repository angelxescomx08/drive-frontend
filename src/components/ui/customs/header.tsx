import { LogOut, Package, Search } from 'lucide-react';
import { useAuthStore } from '../../../modules/auth/hooks/useAuthStore';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { Input } from '../input';

export function Header() {
  const { user } = useAuthStore();

  return (
    <header className='flex justify-between items-center border-b border-gray-200 shadow-lg p-4'>
      <div className='flex items-center gap-2'>
        <Package />
        <h1 className='text-2xl font-bold'>Drive app</h1>
      </div>

      <div className='flex items-center gap-4 max-w-md flex-1 mx-8'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
          <Input
            type='text'
            placeholder='Buscar archivos y carpetas...'
            className='pl-10 pr-4 w-full'
          />
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer hover:opacity-80 transition-opacity'>
              <AvatarImage src='' alt='Usuario' />
              <AvatarFallback className='bg-blue-500 text-white font-semibold'>
                {user?.email?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>Mi cuenta</p>
                <p className='text-xs leading-none text-muted-foreground'>
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
