import { createBrowserRouter } from 'react-router';
import { LoginForm } from '../modules/auth/components/forms/LoginForm';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />,
  },
  {
    path: '/about',
    element: <>About</>,
  },
  {
    path: '/contact',
    element: <>Contact</>,
  },
]);
