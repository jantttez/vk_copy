import React from "react";
import styles from "./music-card.module.scss";
import { Song } from "@shared/types";
import { FormatedNumToDuraction } from "@shared/lib";

interface MusicCardProps {
  song: Song;
}

export const MusicCard: React.FC<MusicCardProps> = ({ song }) => {
  const formattedTime = FormatedNumToDuraction(song.duration);

  return (
    <div className={styles.musicCard}>
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
