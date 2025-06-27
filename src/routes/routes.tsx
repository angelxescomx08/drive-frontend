import ColorPalette from '@/components/ColorPalette';
import { Button } from '@/components/ui/button';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ColorPalette />
        <Button>Click me</Button>
      </>
    ),
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
