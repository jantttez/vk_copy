import styles from './friends-card.module.scss';
interface Props {
  renderFriendsHeader: () => JSX.Element;
  renderFriendsList: () => JSX.Element;
}

export function Friends({ renderFriendsHeader, renderFriendsList }: Props) {
  return (
    <div className={styles.friendsSection}>
      <div className={styles.section}>
        {renderFriendsHeader()}
        {renderFriendsList()}
      </div>
    </div>
  );
}
