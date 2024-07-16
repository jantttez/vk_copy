import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  audioPlay: any;
  setCurrentTime: Dispatch<SetStateAction<any>>;
}

export function useAudioTimeupdate({ audioPlay, setCurrentTime }: Props) {
  useEffect(() => {
    if (audioPlay) {
      const audio = audioPlay;

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [audioPlay]);
}
