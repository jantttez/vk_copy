import styles from "./header-popup.module.scss";

import { Person } from "@shared/types";
import { Spinner } from "@chakra-ui/react";
import { PopupUserCard } from "@components/index";
import { getUserId } from "@shared/lib";
import { useQuery } from "@apollo/client";
import { GET_USER_FRIENDS_IDS } from "@shared/api";

interface Props {
  people: Person[];
}

export function HeaderPopup({ people }: Props) {
  const userId = getUserId();

  const { data, loading, error } = useQuery(GET_USER_FRIENDS_IDS, {
    variables: { id: userId },
  });

  if (loading) return <Spinner />;
  if (error) return <div>error {error.message}</div>;

  const currnetUserFriendsIds = data.users[0].friends;

  return (
    <div className={styles.popup}>
      <h2>Люди</h2>
      <hr className={styles.divider} />
      <ul className={styles.peopleList}>
        {people ? (
          people.map((person) => (
            <PopupUserCard person={person} currnetUserFriendsIds={currnetUserFriendsIds} currentUserId={userId} />
          ))
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
}
