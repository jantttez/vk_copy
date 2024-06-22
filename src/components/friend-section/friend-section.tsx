import styles from "./friend-section.module.scss";

import { Friend } from "@shared/types";

import { FriendsCard } from "@components/friends-card/friends-card";

interface Props {
  friends: Friend[];
}

export function FriendsSection({ friends }: Props) {
  return (
    <>
      {!friends ? (
        <></>
      ) : (
        <div className={styles.friendsSection}>
          <FriendsCard title="Друзья" FriendList={friends} />
        </div>
      )}
    </>
  );
}
