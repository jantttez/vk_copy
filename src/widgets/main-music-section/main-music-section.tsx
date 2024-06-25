import { MusicList, Player, UploadFile } from "@components/index";
import styles from "./main-music-section.module.scss";
import { songs } from "@shared/constant";
import { Song } from "@shared/types";
import { useEffect, useState } from "react";
import { useSongStore } from "@shared/lib/storage";
import { useShallow } from "zustand/react/shallow";

export function MainMusicSection() {
  const { addSong, song, replaseSong } = useSongStore(useShallow((state) => state));

  const [audioSrc, setAudioSrc] = useState("");

  const [songFile, setSongFile] = useState();

  useEffect(() => {
    setAudioSrc(song.songPath);
  }, [song]);

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.rightBody}>
          <div className={styles.rightSection}>
            <MusicList songs={songs} />
          </div>
        </div>
        <div className={styles.leftSection}>
          <UploadFile accept="audio/mpeg" setFile={setSongFile}>
            <button className={styles.UploadBtn}>Upload Session song</button>
          </UploadFile>
        </div>
      </div>
      <Player audioSrc={audioSrc} currentSong={song} />
    </div>
  );
}
