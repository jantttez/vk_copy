import styles from "./main-user-section.module.scss";

import { FilterField, FriendsSection, PostList, SubscriptionsSection, UserHeader } from "@components/index";

import { InputField } from "@components/index";
import { useRef, useState } from "react";

import { useUserStore } from "@shared/lib/storage";
import { getUserId } from "@shared/utils";
import { useUserPostsWithPagination } from "@shared/hooks/use-user-posts-with-pagination";
import { Spinner } from "@chakra-ui/react";

export function MainUserSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const userId = getUserId();
  console.log(userId);

  const currentUser = useUserStore((state) => state.user);

  const { userPosts, userPostsCount, isFetching } = useUserPostsWithPagination(limit, currentPage, userId);

  return (
    <div className={styles.mainContainer}>
      <UserHeader user={currentUser} />
      <section className={styles.mainSection}>
        <div className={styles.right_section}>
          <div className={styles.fields}>
            <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
            <FilterField />
          </div>
          {isFetching ? (
            <Spinner justifySelf={"center"} alignSelf={"center"} />
          ) : (
            <div className={styles.postList}>{userPosts ? <PostList posts={userPosts} /> : <></>}</div>
          )}
        </div>
        <div className={styles.leftSection}>
          {currentUser?.friends ? <FriendsSection friends={currentUser?.friends} /> : <></>}
          <SubscriptionsSection subscriptions={currentUser?.subscription} />
        </div>
      </section>
    </div>
  );
}
