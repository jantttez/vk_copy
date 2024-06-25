import { MusicList, Player } from "@components/index";
import styles from "./main-music-section.module.scss";
import { songs } from "@shared/constant";
import { Input } from "@chakra-ui/react";

export function MainMusicSection() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.rightBody}>
          <div>
            <Input
              placeholder="song search..."
              variant={"unstyled"}
              margin={1}
              padding={2}
              className={styles.music_field}
            />
          </div>
          <div className={styles.rightSection}>
            <MusicList songs={songs} />
          </div>
        </div>
        <div className={styles.leftSection}>
          здесь будет аплоид трека фильтры треков и мб еще что то, мб картинка какая то
        </div>
      </div>
      <Player />
    </div>
  );
}
