import { useParams } from 'react-router-dom';
import { appRouter } from '@app/router/appRouter';

import styles from './styles.module.scss';

export const AdditionalDetailPage = () => {
  const params = useParams();
  const id = params.additionalId;

  const handleNavigateBack = () => {
    appRouter.navigate('/additional');
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
