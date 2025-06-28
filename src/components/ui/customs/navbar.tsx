import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';
import { LogOut, User } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className='bg-white shadow-sm border-b'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <h1 className='text-xl font-semibold text-gray-800'>
              Mi Aplicación
            </h1>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2 text-gray-600'>
              <User className='w-4 h-4' />
              <span className='text-sm'>{user?.email}</span>
            </div>

            <Button
              onClick={handleLogout}
              variant='outline'
              size='sm'
              className='flex items-center space-x-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
            >
              <LogOut className='w-4 h-4' />
              <span>Cerrar Sesión</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
