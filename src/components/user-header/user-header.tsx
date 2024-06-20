import { CircleAlert } from "lucide-react";
import styles from "./user-header.module.scss";

interface UserHeaderProps {
  avatar: string;
  name: string;
  status: string;
  onEditProfile: () => void;
}

export function UserHeader({ avatar, name, status, onEditProfile }: UserHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.userInfoMain}>
        <img src={avatar} alt="User Avatar" className={styles.avatar} />

        <div className={styles.userInfo}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.status}>{status}</p>
          <a href="#more" className={styles.moreLink}>
            <CircleAlert size={18} />
            Подробнее
          </a>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.editButton} onClick={onEditProfile}>
          Редактировать профиль
        </button>
      </div>
    </div>
  );
}
