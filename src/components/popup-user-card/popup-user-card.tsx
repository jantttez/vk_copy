import { UserRoundPlus } from "lucide-react";
import styles from "./popup-user-card.module.scss";
import { Person } from "@shared/types";
import { useMutation } from "@apollo/client";
import { ADD_USER_FRIEND, GET_USER_FRIENDS_IDS } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

interface Props {
  person: Person;
  currnetUserFriendsIds: string[];
  currentUserId: string;
}

export function PopupUserCard({ person, currnetUserFriendsIds, currentUserId }: Props) {
  const newCurrentUserIds = [...currnetUserFriendsIds, person.id];
  const newPersonUserids = [...person.friends, currentUserId];

  const dontShowAddButton = currnetUserFriendsIds.some((friendid) => friendid === person.id);

  const [ADD_FRIEND, { loading, error }] = useMutation(ADD_USER_FRIEND, {
    variables: {
      idFirst: currentUserId,
      friendsIdsFirst: newCurrentUserIds,
      idSecond: person.id,
      friendsIdsSecond: newPersonUserids,
    },
    refetchQueries: [
      {
        query: GET_USER_FRIENDS_IDS,
        variables: { id: currentUserId },
      },
    ],
  });

  const addHandler = () => {
    ADD_FRIEND();
  };

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;

  return (
    <li key={person.id} className={styles.personItem}>
      <img src={person.userPhoto} alt={person.name} className={styles.avatar} />
      <span className={styles.name}>{person.name}</span>
      {currentUserId === person.id ? (
        <></>
      ) : dontShowAddButton ? (
        <></>
      ) : (
        <button className={styles.addButton} onClick={addHandler}>
          <UserRoundPlus size={20} />
        </button>
      )}
    </li>
  );
}
