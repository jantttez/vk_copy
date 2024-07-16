import styles from './ui.module.scss';
import { FormatedNumToDuraction } from '@shared/lib';
import { Song } from '@entities/song';

interface Props {
  song: Song;
  addHandler: (song: Song) => void;
}

export const MusicCard = ({ song, addHandler }: Props) => {
  const formattedTime = FormatedNumToDuraction(song.duration);

  return (
    <div className={styles.musicCard} onClick={() => addHandler(song)}>
      <div className={styles.leftSide}>
        <img src={song.songCover} alt={`${song.songName} cover`} className={styles.cover} />
        <div className={styles.songInfo}>
          <span className={styles.songTitle}>{song.songName}</span>
          <span className={styles.artistName}>{song.authorName}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <span className={styles.duration}>{formattedTime}</span>
      </div>
    </div>
  );
};
