import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { queryClient } from './lib/queryClient';
import { getMe } from './modules/auth/actions/auth';
import { useAuthStore } from './modules/auth/hooks/useAuthStore';
import { routes } from './routes/routes';

import { toast } from 'sonner';
import './App.css';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getMe()
        .then(user => {
          useAuthStore.getState().setUser(user);
        })
        .catch(_error => {
          useAuthStore.getState().setUser(null);
          toast.error('Tu sesión ha expirado');
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
