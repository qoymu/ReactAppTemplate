import { IRelease } from '@type/releaseTypes';

import styles from './styles.module.scss';

interface Props {
  release: IRelease;
}

export const RealeaseCard = ({ release }: Props) => {
  return (
    <div className={styles.release}>
      <span>Версия: {release.version}</span>
      <span>Описание: {release.description}</span>
      <span>Имя файла: {release.file_name}</span>
      <span>md5sum: {release.md5sum}</span>
      <span>Дата: {release.date}</span>
      <span>Приложение: {release.app}</span>
    </div>
  );
};
