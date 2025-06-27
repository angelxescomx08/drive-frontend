import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { queryClient } from './lib/queryClient';
import { routes } from './routes/routes';

import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
