import { Trash, UserRoundPlus } from 'lucide-react';
import styles from './styles/popup-user-card.module.scss';
import { Person } from '../model';
import { useMutation } from '@apollo/client';
import { ADD_USER_FRIEND, GET_USER_FRIENDS_IDS } from '@shared/api';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserHeaderButton } from '@entities/user';
import * as lib from '../lib';

interface Props {
  person: Person;
  currnetUserFriendsIds: string[];
  currentUserId: string;
}

export function PopupUserCard({ person, currnetUserFriendsIds, currentUserId }: Props) {
  const { newCurrentUserIds, newPersonUserids } = lib.getAddUserIds(currnetUserFriendsIds, person, currentUserId);

  const { newCurrentUserDeleteIds, newPersonUserDeleteIds } = lib.getDeleteUserids(
    currnetUserFriendsIds,
    person,
    currentUserId
  );

  const dontShowAddButton = currnetUserFriendsIds.some((friendid) => friendid === person.id);

  const navigate = useNavigate();

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

  const deleteFriendHandler = () => {
    ADD_FRIEND({
      variables: {
        idFirst: currentUserId,
        friendsIdsFirst: newCurrentUserDeleteIds,
        idSecond: person.id,
        friendsIdsSecond: newPersonUserDeleteIds,
      },
    }).catch((error) => console.error('Error adding friend:', error));
  };

  const addHandler = () => {
    ADD_FRIEND();
  };

  const clickPhotohandler = () => {
    navigate(`/${person.id}`);
  };

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;
  return (
    <li key={person.id} className={styles.personItem}>
      <img src={person.userPhoto} alt={person.name} className={styles.avatar} onClick={clickPhotohandler} />
      <span className={styles.name}>{person.name}</span>
      {currentUserId === person.id ? null : dontShowAddButton ? (
        <div aria-label='delete' onClick={deleteFriendHandler}>
          <UserHeaderButton Icon={Trash} size={20} />
        </div>
      ) : (
        <button className={styles.addButton} onClick={addHandler}>
          <UserRoundPlus size={20} />
        </button>
      )}
    </li>
  );
}
