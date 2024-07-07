import styles from './music-section.module.scss';
import { songs } from '@shared/constant';
import { useEffect, useState } from 'react';
import { MusicCard, Song, useSongStore } from '@entities/song';
import { SongUploadBtn } from '@features/music/song-upload';
import { Player } from '@widgets/player';

export function MainMusicSection() {
  const { song, addSong } = useSongStore((state) => state);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [songFile, setSongFile] = useState<any>();

  const addHandler = (song: Song) => {
    addSong(song);
  };

  useEffect(() => {
    if (song) {
      setAudioSrc(null);
    } else if (songFile) {
      setAudioSrc(songFile[0]);
    }
  }, [song, songFile]);

  if (!song) return null;
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.rightBody}>
          <div className={styles.rightSection}>
            <div className='flex flex-col items-center w-full'>
              {songs.map((song, index) => (
                <MusicCard key={index} song={song} addHandler={addHandler} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.leftSection}>
          <SongUploadBtn setSongFile={setSongFile} />
        </div>
      </div>
      {song || audioSrc ? <Player audioSrc={audioSrc} currentSong={song} /> : null}
    </div>
  );
}
