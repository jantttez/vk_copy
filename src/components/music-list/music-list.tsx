import React from "react";
import { MusicCard } from "@components/index";
import styles from "./music-list.module.scss";
import { Song } from "@shared/types";

interface MusicListProps {
  songs: Song[];
}

export const MusicList: React.FC<MusicListProps> = ({ songs }) => {
  return (
    <div className={styles.musicList}>
      {songs.map((song, index) => (
        <MusicCard key={index} song={song} />
      ))}
    </div>
  );
};
