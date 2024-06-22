import { CircleAlert, Handshake, MessageCircle } from "lucide-react";
import styles from "./user-header.module.scss";
import { UserHeaderButton } from "@shared/ui";
import { useUserStore } from "@store/use-user-store";

export function UserHeader() {
  const isFriend = false;

  const currentUser = useUserStore((state) => state.user);

  return (
    <div className={styles.header}>
      <div className={styles.userInfoMain}>
        <img src={currentUser?.userPhoto} alt="User Avatar" className={styles.avatar} />

        <div className={styles.userInfo}>
          <h1 className={styles.name}>{currentUser?.name}</h1>
          <p className={styles.status}>{currentUser?.status}</p>
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
