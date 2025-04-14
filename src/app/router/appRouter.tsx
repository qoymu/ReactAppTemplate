import { Navigate, createHashRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { AuthLayout, DefaultLayout } from '@ui/layouts';
import { Realeases } from '@pages/Realeases';
import { Groups } from '@pages/Groups';
import { GroupDetail } from '@pages/GroupDetail';
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

  if (isAuthorized) return <Navigate to="/realeases" />;

  return children;
};

export const appRouter = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Navigate to="/realeases" />,
    children: [
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
            <GroupDetail />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
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
