import React from "react";
import styles from "./FriendsSection.module.scss";

interface Friend {
id: number;
avatar: string;
name: string;
}

interface FriendsSectionProps {
onlineFriends: Friend[];
allFriends: Friend[];
}

const FriendsSection: React.FC<FriendsSectionProps> = ({ onlineFriends, allFriends }) => {
return (

<div className={styles.friendsSection}>
<div className={styles.section}>
<div className={styles.header}>
<h3>Друзья онлайн</h3>
<span>{onlineFriends.length}</span>
</div>
<div className={styles.avatars}>
{onlineFriends.slice(0, 3).map(friend => (
<img key={friend.id} src={friend.avatar} alt={friend.name} className={styles.avatar} />
))}
</div>
</div>
<hr className={styles.divider} />
<div className={styles.section}>
<div className={styles.header}>
<h3>Друзья</h3>
<span>{allFriends.length}</span>
</div>
<div className={styles.avatars}>
{allFriends.slice(0, 3).map(friend => (
<img key={friend.id} src={friend.avatar} alt={friend.name} className={styles.avatar} />
))}
</div>
</div>
</div>
);
};

export default FriendsSection;
