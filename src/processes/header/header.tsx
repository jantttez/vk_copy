import styles from "./header.module.scss";
import { ChevronDown, Search } from "lucide-react";

import { useRef, useState } from "react";

import { DropDownContent, HeaderPopup, VkLogo } from "@components/index";
import { useClickOutside } from "@shared/hooks";
import { mockPeople } from "@shared/constant";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [avatarIsActive, setAvatarIsActiv] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside<HTMLDivElement>({ ref: dropDownMenuRef, setState: setAvatarIsActiv });

  useClickOutside<HTMLDivElement>({ ref: searchRef, setState: setIsFocused });

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
      <hr className={styles.devider} />
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
          <img
            src="https://i.pinimg.com/564x/0f/86/4b/0f864b918af5a8310fed7c12e76468a9.jpg"
            alt="Avatar"
            className={styles.avatarPhoto}
          />
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
