import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const AdditionalPage = () => {
  // consts
  const navigate = useNavigate();

  // handlers
  const handleNavigateMainPage = () => {
    navigate('/main');
  };

  const handleNavigatedetailPage = (id: number) => {
    navigate(`/additional/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Дополнительная страница</h1>
      <div>
        <ul className={styles.list}>
          <li onClick={() => handleNavigatedetailPage(1)}>Элемент 1</li>
          <li onClick={() => handleNavigatedetailPage(2)}>Элемент 2</li>
        </ul>
      </div>
      <button type="button" onClick={handleNavigateMainPage}>
        На главную
      </button>
    </div>
  );
};
