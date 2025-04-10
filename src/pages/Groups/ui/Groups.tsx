import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const Groups = () => {
  // consts
  const navigate = useNavigate();

  const handleNavigatedetailPage = (id: number) => {
    navigate(`/groups/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Группы</h1>
      <div>
        <ul className={styles.list}>
          <li onClick={() => handleNavigatedetailPage(1)}>Группа 1</li>
          <li onClick={() => handleNavigatedetailPage(2)}>Группа 2</li>
        </ul>
      </div>
    </div>
  );
};
