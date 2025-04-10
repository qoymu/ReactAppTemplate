import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const PAGES = [
  { url: '/realeases', label: 'Релизы' },
  { url: '/groups', label: 'Группы' },
];

export const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        {PAGES.map((page) => (
          <NavLink key={page.url} to={page.url}>
            {page.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
