import { useGetReleasesQuery } from '@api/releaseApi';

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
              <div className={styles.release}>
                <span>Версия: {release.version}</span>
                <span>Описание: {release.description}</span>
                <span>Имя файла: {release.file_name}</span>
                <span>md5sum: {release.md5sum}</span>
                <span>Дата: {release.date}</span>
                <span>Приложение: {release.app}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
