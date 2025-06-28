import { type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '../modules/auth/hooks/useAuthStore';

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuthStore();

  if (!user) return <Navigate to='/' />;

  return <>{children}</>;
};
