import { Navigate, createHashRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { AuthLayout, DefaultLayout } from '@ui/layouts';
import { Realeases } from '@pages/Realeases';
import { Groups } from '@pages/Groups';
import { AdditionalDetailPage } from '@pages/AdditionalDetailPage';
import { Auth } from '@pages/Auth';

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
    errorElement: <Navigate to="/realeases" />,
    children: [
      {
        index: true,
        element: <Navigate to="/realeases" replace />,
      },
      {
        path: '/realeases',
        element: (
          <GuestGuard>
            <Realeases />
          </GuestGuard>
        ),
      },
      {
        path: '/groups',
        element: (
          <GuestGuard>
            <Groups />
          </GuestGuard>
        ),
      },
      {
        path: '/groups/:groupId',
        element: (
          <GuestGuard>
            <AdditionalDetailPage />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: (
          <AuthGuard>
            <Auth />
          </AuthGuard>
        ),
      },
    ],
  },
]);
