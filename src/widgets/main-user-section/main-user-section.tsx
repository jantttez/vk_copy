import styles from "./main-user-section.module.scss";

import { FilterField, FriendsSection, PostList, SubscriptionsSection, UserHeader } from "@components/index";

import { InputField } from "@components/index";
import { useRef, useState } from "react";

import { useUserStore } from "@shared/lib/storage";
import { Post } from "@shared/types";

export function MainUserSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const mockPosts: Post[] = [];

  const currentUser = useUserStore((state) => state.user);

  return (
    <div className={styles.mainContainer}>
      <UserHeader user={currentUser} />
      <section className={styles.mainSection}>
        <div className={styles.fields}>
          <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
          <FilterField />
        </div>
        <div className={styles.postList}>{mockPosts ? <PostList posts={mockPosts} /> : <></>}</div>
        <div className={styles.leftSection}>
          {currentUser?.friends ? <FriendsSection friends={currentUser?.friends} /> : <></>}
          <SubscriptionsSection subscriptions={currentUser?.subscription} />
        </div>
      </section>
    </div>
  );
}
