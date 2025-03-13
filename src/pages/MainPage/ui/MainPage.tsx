import { appRouter } from '@app/router/appRouter';

import styles from './styles.module.scss';

export const MainPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    appRouter.navigate('/login');
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
