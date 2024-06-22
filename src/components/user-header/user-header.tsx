import { CircleAlert, Handshake, MessageCircle } from "lucide-react";
import styles from "./user-header.module.scss";
import { UserHeaderButton } from "@shared/ui";
import { User } from "@shared/types";

interface Props {
  user: User | null;
}

export function UserHeader({ user }: Props) {
  const isFriend = false;

  return (
    <div className={styles.header}>
      <div className={styles.userInfoMain}>
        <img src={user?.userPhoto} alt="User Avatar" className={styles.avatar} />

        <div className={styles.userInfo}>
          <h1 className={styles.name}>{user?.name}</h1>
          <p className={styles.status}>{user?.status}</p>
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
          <UserHeaderButton title="Edit" size={20} />
        )}
      </div>
    </div>
  );
}
