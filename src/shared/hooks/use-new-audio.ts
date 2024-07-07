import { Song } from '@entities/song';
import { useEffect } from 'react';
interface Props {
  audioSrc: any;
  setUserSongName: any;
  setAudioPlay: any;
  audioPlay: HTMLAudioElement | null | undefined;
  currentSong: Song | null;
  setCurrentTime: any;
  setIsPlay: any;
  volume: number;
}

export function useNewAudio({
  audioSrc,
  setUserSongName,
  setAudioPlay,
  audioPlay,
  currentSong,
  setCurrentTime,
  setIsPlay,
  volume,
}: Props) {
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    if (audioSrc) {
      const src = URL.createObjectURL(audioSrc);
      setUserSongName(audioSrc.name);
      audio = new Audio(src);
    } else if (currentSong) {
      audio = new Audio(currentSong.songPath);
    }

    if (audio) {
      audio.volume = volume / 100;
      setAudioPlay(audio);
    }

    return () => {
      if (audioPlay) {
        audioPlay.pause();
        audioPlay.currentTime = 0;
      }
      setCurrentTime(0);
      setAudioPlay(null);
      setIsPlay.toggle;
    };
  }, [audioSrc, currentSong]);
}
