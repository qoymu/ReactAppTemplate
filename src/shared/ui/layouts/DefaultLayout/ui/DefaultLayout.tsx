import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const DefaultLayout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </main>
  );
};
