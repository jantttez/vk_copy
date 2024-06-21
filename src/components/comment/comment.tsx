import { useState } from "react";
import styles from "./comment.module.scss"; // Подключаем стили для компонента

interface Props {
  avatar: string;
  username: string;
  date: string;
  text: string;
}

export function Comment({ avatar, username, date, text }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const deleteComment = () => {
    // Логика удаления комментария
  };

  const replyToComment = () => {
    // Логика ответа на комментарий
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <div className={styles.infoContainer}>
          <img src={avatar} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{username}</span>
            <span className={styles.date}>{date}</span>
          </div>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          ...
        </button>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.menu}>
        {menuVisible && (
          <div className={styles.dropdownMenu}>
            <button onClick={deleteComment}>Удалить</button>
            <button onClick={replyToComment}>Ответить</button>
          </div>
        )}
      </div>
    </div>
  );
}
