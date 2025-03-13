import { appRouter } from '@app/router/appRouter';

import styles from './styles.module.scss';

export const AuthPage = () => {
  const handleClick = () => {
    localStorage.setItem('auth', 'true');
    appRouter.navigate('/main');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Страница авторизации</h1>
      <button type="button" onClick={handleClick}>
        Войти
      </button>
    </div>
  );
};
