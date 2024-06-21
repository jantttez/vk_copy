import styles from "./friends-card.module.scss";

import { IFriend } from "@shared/types";

interface Props {
  title: string;
  FriendList: IFriend[];
}

export function FriendsCard({ title, FriendList }: Props) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <span>{FriendList.length}</span>
      </div>
      <div className={styles.avatars}>
        {FriendList.slice(0, 4).map((friend) => (
          <div className={styles.userCase}>
            <img key={friend.id} src={friend.avatar} alt={friend.name} className={styles.avatar} />
            <h3>{friend.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
