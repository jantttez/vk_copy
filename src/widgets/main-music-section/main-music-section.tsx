import { Player } from "@components/index";
import styles from "./main-music-section.module.scss";

export function MainMusicSection() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.rightSection}>здесь будет лист с треками</div>
        <div className={styles.leftSection}>
          здесь будет аплоид трека фильтры треков и мб еще что то, мб картинка какая то
        </div>
      </div>
      <Player />
    </div>
  );
}
