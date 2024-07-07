import styles from './styles/popup.module.scss';
import { Person } from '../model';
import { Spinner } from '@chakra-ui/react';
import { getUserId } from '@shared/lib';
import { PopupUserCard } from './popup-user-card';
import { usePopupPeople } from '../api';

interface Props {
  people: Person[];
}

export function HeaderPopup({ people }: Props) {
  const userId = getUserId();
  if (!userId) return null;

  const { data, loading, error } = usePopupPeople(userId);

  const currnetUserFriendsIds = data.users[0].friends;

  if (loading) return <Spinner />;
  if (error) return <div>error {error.message}</div>;
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
