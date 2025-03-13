import { Navigate, createHashRouter } from 'react-router-dom';
import { ReactElement } from 'react';

import { DefaultLayout } from '../../shared/layouts';
import { MainPage } from '@pages/MainPage';
import { AdditionalPage } from '@pages/AdditionalPage';
import { AdditionalDetailPage } from '@pages/AdditionalDetailPage';
import { AuthPage } from '@pages/AuthPage';

type WrapperProps = {
  children: ReactElement;
};

const GuestGuard = ({ children }: WrapperProps) => {
  const isAuthorized = localStorage.getItem('auth');

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
};

const AuthGuard = ({ children }: WrapperProps) => {
  const isAuthorized = localStorage.getItem('auth');

  if (isAuthorized) return <Navigate to="/" />;

  return children;
};

export const appRouter = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Navigate to="/main" state />,
    children: [
      {
        index: true,
        element: <Navigate to="/main" replace />,
      },
      {
        path: '/main',
        element: (
          <GuestGuard>
            <MainPage />
          </GuestGuard>
        ),
      },
      {
        path: '/additional',
        element: (
          <GuestGuard>
            <AdditionalPage />
          </GuestGuard>
        ),
      },
      {
        path: '/additional/:additionalId',
        element: (
          <GuestGuard>
            <AdditionalDetailPage />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/login',
        element: (
          <AuthGuard>
            <AuthPage />
          </AuthGuard>
        ),
      },
    ],
  },
]);
