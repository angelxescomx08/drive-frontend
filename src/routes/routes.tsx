import { createBrowserRouter } from 'react-router';
import { LoginPage } from '../pages/(public)/LoginPage';
import { RegisterPage } from '../pages/(public)/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
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
      </PrivateRoute>
    ),
  },
  {
    path: '/about',
    element: (
      <PrivateRoute>
        <div className='min-h-screen bg-gray-50 p-8'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Acerca de</h1>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>Esta es la página de información.</p>
            </div>
          </div>
        </div>
      </PrivateRoute>
    ),
  },
  {
    path: '/contact',
    element: (
      <PrivateRoute>
        <div className='min-h-screen bg-gray-50 p-8'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Contacto</h1>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>Información de contacto.</p>
            </div>
          </div>
        </div>
      </PrivateRoute>
    ),
  },
]);
