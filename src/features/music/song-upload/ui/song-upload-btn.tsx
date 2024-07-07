import { UploadFile } from './song-upload';
import styles from './btn.module.scss';

interface Props {
  setSongFile: any;
}

export const SongUploadBtn = ({ setSongFile }: Props) => {
  return (
    <UploadFile accept='audio/mpeg' setFile={setSongFile}>
      <button className={styles.UploadBtn}>Upload Session song</button>
    </UploadFile>
  );
};
