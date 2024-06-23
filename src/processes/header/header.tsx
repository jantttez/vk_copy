import styles from "./header.module.scss";
import { ChevronDown, Search } from "lucide-react";

import { useRef, useState } from "react";

import { DropDownContent, HeaderPopup, VkLogo } from "@components/index";
import { useClickOutside } from "@shared/hooks";
import { mockPeople } from "@shared/constant";
import { useUserStore } from "@shared/lib/storage";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [avatarIsActive, setAvatarIsActiv] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside<HTMLDivElement>({ ref: dropDownMenuRef, setState: setAvatarIsActiv });

  useClickOutside<HTMLDivElement>({ ref: searchRef, setState: setIsFocused });

  const currentUser = useUserStore((state) => state.user);

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

  const handleAddFriend = (id: number) => {
    console.log(`Add friend with id: ${id}`);
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
            type="text"
            placeholder="Поиск"
            onClick={searchInputEvent}
            ref={inputRef}
          />
        </div>
        {isFocused && <HeaderPopup people={mockPeople} onAddFriend={handleAddFriend} />}
      </div>
      <div className={`${styles.avatar} ${avatarIsActive ? styles.active : ""}`} ref={dropDownMenuRef}>
        <button className={styles.avatarButton} onClick={avatarEvent}>
          <img src={currentUser?.userPhoto} alt="Avatar" className={styles.avatarPhoto} />
          <ChevronDown />
        </button>
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
