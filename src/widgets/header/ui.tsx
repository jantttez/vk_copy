import styles from './ui.module.scss';
import { ChevronDown, Search } from 'lucide-react';

import { useRef, useState } from 'react';

import { useClickOutside } from '@shared/hooks';
import { useUserStore } from '@entities/user';
import { useQuery } from '@apollo/client';
import { GET_POPUP_PEOPLE } from '@shared/api/index';
import { Spinner } from '@chakra-ui/react';
import { getUserId } from '@shared/lib';
import { VkLogo } from '@entities/header';

import { Person } from '@entities/header/model';
import { usePopupPeople } from '@entities/header/api';
import { PopupUserCard } from '@widgets/popup-user-card';
import { DropDownContent } from '@entities/drop-down-menu';

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [avatarIsActive, setAvatarIsActiv] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside<HTMLDivElement>({ ref: dropDownMenuRef, setState: setAvatarIsActiv });
  useClickOutside<HTMLDivElement>({ ref: searchRef, setState: setIsFocused });
  const currentUser = useUserStore((state) => state.user);
  const userId = getUserId();
  if (!userId) return null;

  const { data: users, loading: load, error } = usePopupPeople(userId);
  const { data, loading } = useQuery(GET_POPUP_PEOPLE);
  if (!data) return null;
  if (!users) return null;

  const currnetUserFriendsIds = users.users[0].friends;

  const searchHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(!isFocused);
    }
  };

  const avatarEvent = () => {
    setAvatarIsActiv(!avatarIsActive);
  };

  const dropDownMenuHandler = () => {
    setAvatarIsActiv(!avatarIsActive);
  };

  const searchInputEvent = () => {
    setIsFocused(!isFocused);
  };

  return (
    <header className={styles.header}>
      <VkLogo />
      <div className={styles.searchContainer} ref={searchRef}>
        <div className={styles.inputGroup}>
          <button onClick={searchHandler} className={styles.inputLeftAddon}>
            <Search size={15} />
          </button>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Поиск'
            onClick={searchInputEvent}
            ref={inputRef}
          />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          isFocused && (
            <div className={styles.popup}>
              <h2>Люди</h2>
              <hr className={styles.divider} />
              <ul className={styles.peopleList}>
                {data ? (
                  data['users'].map((person: Person) => (
                    <PopupUserCard
                      person={person}
                      currnetUserFriendsIds={currnetUserFriendsIds}
                      currentUserId={userId}
                    />
                  ))
                ) : (
                  <Spinner />
                )}
              </ul>
            </div>
          )
        )}
      </div>
      <div className={`${styles.avatar} ${avatarIsActive ? styles.active : ''}`} ref={dropDownMenuRef}>
        {currentUser?.id === userId && (
          <button className={styles.avatarButton} onClick={avatarEvent}>
            <img src={currentUser?.userPhoto} alt='Avatar' className={styles.avatarPhoto} />
            <ChevronDown />
          </button>
        )}

        <div
          className={`${styles.dropDownMenu} ${avatarIsActive ? styles.active : styles.inactive}`}
          onClick={dropDownMenuHandler}
        >
          <DropDownContent />
        </div>
      </div>
    </header>
  );
}
