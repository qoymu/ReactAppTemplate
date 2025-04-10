import { useGetReleasesQuery } from '@api/releaseApi';

import { RealeaseCard } from './RealeaseCard';

import styles from './styles.module.scss';

export const Realeases = () => {
  // api
  const { data, isLoading, isError } = useGetReleasesQuery();

  return (
    <div className={styles.wrapper}>
      <h1>Список релизов</h1>
      <div className={styles.container}>
        {isLoading && <span>Загрузка...</span>}
        {isError && <span>Ошибка при получении релизов</span>}
        {data?.releases && (
          <div className={styles.releases}>
            {data.releases.map((release) => (
              <RealeaseCard release={release} key={release.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
