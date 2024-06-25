import React from "react";
import styles from "./music-card.module.scss";

interface MusicCardProps {
  coverUrl: string;
  songTitle: string;
  artistName: string;
  duration: string;
}

export const MusicCard: React.FC<MusicCardProps> = ({ coverUrl, songTitle, artistName, duration }) => {
  return (
    <div className={styles.musicCard}>
      <div className={styles.leftSide}>
        <img src={coverUrl} alt={`${songTitle} cover`} className={styles.cover} />
        <div className={styles.songInfo}>
          <span className={styles.songTitle}>{songTitle}</span>
          <span className={styles.artistName}>{artistName}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  );
};
