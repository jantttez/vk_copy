import React from "react";
import { MusicCard } from "@components/index";
import styles from "./music-list.module.scss";

interface Song {
  coverUrl: string;
  songTitle: string;
  artistName: string;
  duration: string;
}

interface MusicListProps {
  songs: Song[];
}

export const MusicList: React.FC<MusicListProps> = ({ songs }) => {
  return (
    <div className={styles.musicList}>
      {songs.map((song, index) => (
        <MusicCard
          key={index}
          coverUrl={song.coverUrl}
          songTitle={song.songTitle}
          artistName={song.artistName}
          duration={song.duration}
        />
      ))}
    </div>
  );
};
