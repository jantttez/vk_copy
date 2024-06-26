import { useRedirect } from "@shared/hooks";
import styles from "./friends-card.module.scss";

import { Friend } from "@shared/types";

interface Props {
  title: string;
  FriendList: Friend[];
}

export function FriendsCard({ title, FriendList }: Props) {
  const redirect = useRedirect();

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <span>{FriendList.length}</span>
      </div>
      <div className={styles.avatars}>
        {FriendList.slice(0, 3).map((friend) => (
          <div key={friend.id} className={styles.userCase}>
            <img
              src={friend.userPhoto}
              alt={friend.name}
              className={styles.avatar}
              onClick={() => redirect(`/${friend.id}`)}
            />
            <h3>{friend.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
