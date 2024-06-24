import styles from "./friend-section.module.scss";

import { FriendsCard } from "@components/friends-card/friends-card";

import { Friend } from "@shared/types";

interface Props {
  friends: Friend[];
}

export function FriendsSection({ friends }: Props) {
  return (
    <div className={styles.friendsSection}>
      <FriendsCard title="Друзья" FriendList={friends} />
    </div>
  );
}
