import { Navigate, createHashRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { DefaultLayout } from '../../shared/ui/layouts';
import { MainPage } from '@pages/MainPage';
import { AdditionalPage } from '@pages/AdditionalPage';
import { AdditionalDetailPage } from '@pages/AdditionalDetailPage';
import { AuthPage } from '@pages/AuthPage';

type WrapperProps = {
  children: ReactElement;
};

const GuestGuard = ({ children }: WrapperProps) => {
  // Если не авторизован - редирект на страницу авторизации
  const { isAuthorized } = useAppSelector((state) => state.auth);

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
};

const AuthGuard = ({ children }: WrapperProps) => {
  // Если авторизован - редирект на главную
  const { isAuthorized } = useAppSelector((state) => state.auth);

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
