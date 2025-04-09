import { appRouter } from '@app/router/appRouter';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { logOut } from '@slices/authSlice';

import styles from './styles.module.scss';

export const MainPage = () => {
  // consts
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleNavigateAdditionalPage = () => {
    appRouter.navigate('/additional');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Основная страница</h1>
      <button type="button" onClick={handleNavigateAdditionalPage}>
        Доп. страница
      </button>
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
};
