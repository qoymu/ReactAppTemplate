import { Outlet } from 'react-router-dom';
import { Sidebar } from '@widgets/Sidebar';
import { Navigation } from '@widgets/Navigation';

import styles from './styles.module.scss';

export const DefaultLayout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.container}>
          <Navigation />
          <div className={styles.page_content}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
