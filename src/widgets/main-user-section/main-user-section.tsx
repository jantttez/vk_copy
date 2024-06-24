import styles from "./main-user-section.module.scss";

import { FilterField, FriendsSection, PostList, SubscriptionsSection, UserHeader } from "@components/index";

import { InputField } from "@components/index";
import { useRef, useState } from "react";

import { useUserStore } from "@shared/lib/storage";
import { getUserId } from "@shared/lib/utils";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_USER_POSTS } from "@shared/api";

export function MainUserSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const userId = getUserId();

  const currentUser = useUserStore((state) => state.user);

  const { data, loading } = useQuery(GET_USER_POSTS, {
    variables: { id: userId },
  });

  return (
    <div className={styles.mainContainer}>
      {currentUser ? <UserHeader user={currentUser} /> : <Spinner />}
      <section className={styles.mainSection}>
        <div className={styles.right_section}>
          <div className={styles.fields}>
            <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
            <FilterField />
          </div>
          {loading ? (
            <Spinner justifySelf={"center"} alignSelf={"center"} />
          ) : (
            <div className={styles.postList}>{data ? <PostList posts={data.posts} /> : <></>}</div>
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
