import styles from './ui.module.scss';
import { Person } from '@entities/header';
import { useNavigate } from 'react-router-dom';
import * as lib from '@entities/header/lib';
import { AddFriend, DeleteFriend } from '@features/header';

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

  const clickPhotohandler = () => {
    navigate(`/${person.id}`);
  };

  return (
    <li key={person.id} className={styles.personItem}>
      <img src={person.userPhoto} alt={person.name} className={styles.avatar} onClick={clickPhotohandler} />
      <span className={styles.name}>{person.name}</span>
      {currentUserId === person.id ? null : dontShowAddButton ? (
        <DeleteFriend
          currentUserId={currentUserId}
          newCurrentUserDeleteIds={newCurrentUserDeleteIds}
          newCurrentUserIds={newCurrentUserIds}
          newPersonUserDeleteIds={newPersonUserDeleteIds}
          newPersonUserids={newPersonUserids}
          personaId={person.id}
        />
      ) : (
        <AddFriend
          currentUserId={currentUserId}
          newCurrentUserIds={newCurrentUserIds}
          newPersonUserids={newPersonUserids}
          personaId={person.id}
        />
      )}
    </li>
  );
}
