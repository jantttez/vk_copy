import { Avatar } from "@chakra-ui/react";
import styles from "./player.module.scss";

export function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.leftSection}>
        <button>т3ут будет нгазвание трек</button>
        <Avatar />
      </div>
      <div className={styles.centerSection}>
        <button>кнокпи плей пауз и ренджа будет типо по бокам цифры и там время</button>
        <input type="range" />
      </div>
      <div className={styles.rightSection}>
        <button
          style={{
            position: "absolute",
          }}
        >
          звук
        </button>
        <input type="range" className={styles.vertivalClider} />
        <h3>время трека</h3>
      </div>
    </div>
  );
}
