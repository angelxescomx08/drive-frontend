import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from './components/ui/sonner';

import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />;
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
