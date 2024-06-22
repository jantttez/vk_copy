import styles from "./friend-section.module.scss";

import { IFriend } from "@shared/types";

import { FriendsCard } from "@components/friends-card/friends-card";

interface Props {
  onlineFriends: IFriend[];
  allFriends: IFriend[];
}

export function FriendsSection({ onlineFriends, allFriends }: Props) {
  return (
    <div className={styles.friendsSection}>
      <FriendsCard title="Друзья Онлайн" FriendList={onlineFriends} />
      <hr className={styles.divader} />
      <FriendsCard title="Друзья" FriendList={allFriends} />
    </div>
  );
}
