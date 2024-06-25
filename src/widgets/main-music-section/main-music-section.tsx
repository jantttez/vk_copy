import { MusicList, Player, UploadFile } from "@components/index";
import styles from "./main-music-section.module.scss";
import { songs } from "@shared/constant";
import { useEffect, useState } from "react";
import { useSongStore } from "@shared/lib/storage";

export function MainMusicSection() {
  const { song } = useSongStore((state) => state);

  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const [songFile, setSongFile] = useState<any>();

  useEffect(() => {
    if (song) {
      console.log("файл не отработал");
      setAudioSrc(null);
    } else if (songFile) {
      console.log("файл отработал");

      setAudioSrc(songFile[0]);
    }
  }, [song, songFile]);

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
      {song || audioSrc ? <Player audioSrc={audioSrc} currentSong={song} /> : <></>}
    </div>
  );
}
