import { CircleAlert, Handshake, MessageCircle } from "lucide-react";
import styles from "./user-header.module.scss";
import { UserHeaderButton } from "@shared/ui";

interface UserHeaderProps {
  avatar: string;
  name: string;
  status: string;
  onEditProfile: () => void;
}

export function UserHeader({ avatar, name, status }: UserHeaderProps) {
  const isFriend = false;

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
        {isFriend ? (
          <div className={styles.userButtonGroup}>
            <UserHeaderButton Icon={Handshake} size={20} />
            <UserHeaderButton Icon={MessageCircle} title="сообщения" size={20} />
          </div>
        ) : (
          <UserHeaderButton title="Редактировать профиль" size={20} />
        )}
      </div>
    </div>
  );
}
