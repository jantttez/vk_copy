import { useBoolean } from "@chakra-ui/react";
import styles from "./player.module.scss";
import { AudioLines, Play } from "lucide-react";

export function Player() {
  const [volumeActive, setVolumeActive] = useBoolean();

  return (
    <div className={styles.player}>
      <div className={styles.leftSection}>
        <img
          src="https://i.pinimg.com/736x/87/02/6a/87026afcbdc2493eaee00aaaaf997da1.jpg"
          alt="song cover"
          className={styles.ImageCover}
        />
        <div>
          <h5>Название трека</h5>
          <h5>Название аввтора</h5>
        </div>
      </div>
      <div className={styles.centerSection}>
        <button>
          <Play size={20} />
        </button>
        <div className={styles.centerRange}>
          <span>0:00</span>
          <input type="range" className={styles.centerRangeRange} />
          <span>3:45</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button onClick={setVolumeActive.toggle}>
          <AudioLines size={20} />
        </button>
        {volumeActive ? <input type="range" className={styles.verticalSlider} /> : <></>}
        <h3>100</h3>
      </div>
    </div>
  );
}
