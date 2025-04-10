import { useAppDispatch } from '@hooks/useAppDispatch';
import { logOut } from '@slices/authSlice';

import styles from './styles.module.scss';

export const Navigation = () => {
  // consts
  const dispatch = useAppDispatch();

  // handlers
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
};
