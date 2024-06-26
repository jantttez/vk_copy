import styles from "./main-user-section.module.scss";

import { FilterField, FriendsSection, PostList, SubscriptionsSection, UserHeader } from "@components/index";

import { InputField } from "@components/index";
import { useEffect, useRef, useState } from "react";

import { useUserStore } from "@shared/lib/storage";
import { getUserId } from "@shared/lib/utils";
import { Spinner } from "@chakra-ui/react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_USER_FRIENDS_IDS, GET_USER_POSTS, GET_USER_FRIEND } from "@shared/api";
import { User } from "@shared/types";

interface Props {
  currentUser: User;
}

export function MainUserSection({ currentUser }: Props) {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const userId = getUserId();

  // const currentUser = useUserStore((state) => state.user);

  const { data, loading } = useQuery(GET_USER_POSTS, {
    variables: { id: currentUser.id },
  });

  const { data: friendsIdsData, loading: friendsIdsLoading } = useQuery(GET_USER_FRIENDS_IDS, {
    variables: { id: currentUser.id },
  });

  const [GET_USER_FRIENDS, { data: friends, loading: friendsLoading }] = useLazyQuery(GET_USER_FRIEND);

  useEffect(() => {
    if (!friendsIdsLoading && friendsIdsData && friendsIdsData.users && friendsIdsData.users.length > 0) {
      const ids = friendsIdsData.users[0].friends;

      GET_USER_FRIENDS({
        variables: { ids: ids },
      });
    }
  }, [friendsIdsData, friendsIdsLoading]);

  return (
    <div className={styles.mainContainer}>
      {currentUser ? <UserHeader user={currentUser} /> : <Spinner />}
      <section className={styles.mainSection}>
        <div className={styles.right_section}>
          <div className={styles.fields}>
            {userId !== currentUser.id ? (
              <></>
            ) : (
              <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
            )}
            <FilterField />
          </div>
          {loading ? (
            <Spinner justifySelf={"center"} alignSelf={"center"} />
          ) : (
            <div className={styles.postList}>{data ? <PostList posts={data.posts} /> : <></>}</div>
          )}
        </div>
        <div className={styles.leftSection}>
          {friendsLoading ? (
            <Spinner />
          ) : friends && friends.users ? (
            <FriendsSection friends={friends.users} />
          ) : (
            <FriendsSection friends={[]} />
          )}
          {/*<SubscriptionsSection subscriptions={currentUser?.subscription} /> */}
        </div>
      </section>
    </div>
  );
}
