import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

export const GroupDetail = () => {
  // consts
  const params = useParams();
  const id = params.groupId;

  return (
    <div className={styles.wrapper}>
      <h1>Детальная страница группы {id}</h1>
    </div>
  );
};
