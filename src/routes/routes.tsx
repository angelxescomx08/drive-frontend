import { createBrowserRouter } from 'react-router';
import { LoginForm } from '../modules/auth/components/forms/LoginForm';
import { RegisterForm } from '../modules/auth/components/forms/RegisterForm';
import { PrivateProps } from './PrivateProps';
import { PublicRoute } from './PublicRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <LoginForm />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterForm />
      </PublicRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <PrivateProps>
        <div className='min-h-screen bg-gray-50 p-8'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>
              ¡Bienvenido!
            </h1>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>
                Has iniciado sesión correctamente. Esta es tu página principal.
              </p>
            </div>
          </div>
        </div>
      </PrivateProps>
    ),
  },
  {
    path: '/about',
    element: (
      <PrivateProps>
        <div className='min-h-screen bg-gray-50 p-8'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Acerca de</h1>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>Esta es la página de información.</p>
            </div>
          </div>
        </div>
      </PrivateProps>
    ),
  },
  {
    path: '/contact',
    element: (
      <PrivateProps>
        <div className='min-h-screen bg-gray-50 p-8'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Contacto</h1>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>Información de contacto.</p>
            </div>
          </div>
        </div>
      </PrivateProps>
    ),
  },
]);
