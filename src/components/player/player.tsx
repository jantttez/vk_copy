import { useBoolean } from "@chakra-ui/react";
import styles from "./player.module.scss";
import { AudioLines, Pause, Play } from "lucide-react";
import { Song } from "@shared/types";
import { ChangeEvent, useRef, useState } from "react";
import { useSongStore } from "@shared/lib/storage";
import { useShallow } from "zustand/react/shallow";
import { FormatedNumToDuraction } from "@shared/lib";
import { useAudioTimeupdate, useClickOutside, useNewAudio } from "@shared/hooks";

interface Props {
  audioSrc: any;
  currentSong: Song | null;
}

export function Player({ audioSrc, currentSong }: Props) {
  const [volumeActive, setVolumeActive] = useState(false);
  const [isPlay, setIsPlay] = useBoolean();
  const [currnetTime, setCurrentTime] = useState(0);
  const rangeRef = useRef<HTMLInputElement | null>(null);
  const [audioPlay, setAudioPlay] = useState<HTMLAudioElement | null>();
  const [userSongName, setUserSongName] = useState<string>();

  const { changeVolume, volume } = useSongStore(useShallow((state) => state));

  const formattedTime = currentSong ? FormatedNumToDuraction(currentSong!.duration) : "";

  useNewAudio({
    audioSrc: audioSrc,
    audioPlay: audioPlay,
    currentSong: currentSong,
    setAudioPlay: setAudioPlay,
    setCurrentTime: setCurrentTime,
    setIsPlay: setIsPlay,
    setUserSongName: setUserSongName,
    volume: volume,
  });

  useAudioTimeupdate({ audioPlay: audioPlay, setCurrentTime: setCurrentTime });

  useClickOutside<HTMLInputElement>({ ref: rangeRef, setState: setVolumeActive });

  const chanegTimeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseFloat(e.target.value));
    audioPlay!.currentTime = parseFloat(e.target.value);
  };

  const chanegVolumeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeVolume(parseInt(e.target.value));
    audioPlay!.volume = volume / 100;
  };

  const PlayStopHanlder = () => {
    setIsPlay.toggle();
    if (audioPlay) {
      if (isPlay) {
        audioPlay.pause();
      } else {
        audioPlay.play();
      }
    }
  };

  return (
    <div className={styles.player}>
      <div className={styles.leftSection}>
        {audioSrc ? (
          <>
            <>
              <div className={styles.songinfo}>
                <h5>{userSongName}</h5>
              </div>
            </>
          </>
        ) : (
          <>
            <img src={currentSong?.songCover} alt="song cover" className={styles.ImageCover} />
            <div>
              <h5>{currentSong?.songName}</h5>
              <h5>{currentSong?.authorName}</h5>
            </div>
          </>
        )}
      </div>
      <div className={styles.centerSection}>
        <button onClick={PlayStopHanlder}>{isPlay ? <Pause size={20} /> : <Play size={20} />}</button>
        <div className={styles.centerRange}>
          <input
            type="range"
            className={styles.centerRangeRange}
            onChange={chanegTimeHandler}
            value={currnetTime}
            min={0}
            max={currentSong?.duration}
            step={1}
          />
          <span>{formattedTime}</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button onClick={() => setVolumeActive(!volumeActive)}>
          <AudioLines size={20} />
        </button>
        {volumeActive ? (
          <>
            <input
              ref={rangeRef}
              type="range"
              className={styles.verticalSlider}
              onChange={chanegVolumeHandler}
              value={volume}
              min={0}
              max={100}
              step={1}
            />
          </>
        ) : (
          <></>
        )}
        <h3>{volume}</h3>
      </div>
    </div>
  );
}
