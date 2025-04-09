import { useNavigate, useParams } from 'react-router-dom';

import styles from './styles.module.scss';

export const AdditionalDetailPage = () => {
  // consts
  const params = useParams();
  const id = params.additionalId;
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate('/additional');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Детальный страница элемента {id}</h1>
      <button type="button" onClick={handleNavigateBack}>
        Назад
      </button>
    </div>
  );
};
