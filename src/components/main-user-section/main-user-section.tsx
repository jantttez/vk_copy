import styles from "./main-user-section.module.scss";

import { FilterField, FriendsSection, PostList, SubscriptionsSection, UserHeader } from "@components/index";

import { InputField } from "@components/index";
import { useRef, useState } from "react";

import { mockPosts, onlineFriends, allFriends } from "@shared/constant";

export function MainUserSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };
  return (
    <div className={styles.mainContainer}>
      <UserHeader
        avatar="https://i.pinimg.com/564x/0f/86/4b/0f864b918af5a8310fed7c12e76468a9.jpg"
        name="John Doe"
        status="а я ебу что ли?"
        onEditProfile={handleEditProfile}
      />
      <section className={styles.mainSection}>
        <div className={styles.postListAndInput}>
          <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
          <FilterField />
          <PostList posts={mockPosts} />
        </div>
        <div className={styles.leftSection}>
          <FriendsSection onlineFriends={onlineFriends} allFriends={allFriends} />
          <SubscriptionsSection />
        </div>
      </section>
    </div>
  );
}
