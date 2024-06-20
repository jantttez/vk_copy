import styles from "./header.module.scss";
import { ChevronDown, Search } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import vkLogo from "@shared/assets/vkLogo.svg";

import { DropDownContent, HeaderPopup } from "@components/index";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [avatarIsActiv, setAvatarIsActiv] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dproDownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const DropDownMenuOutsideHandler = (e: any) => {
      if (dproDownMenuRef.current && !dproDownMenuRef.current.contains(e.target)) {
        setAvatarIsActiv(false);
      }
    };

    const searchOutsideHandler = (e: any) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", DropDownMenuOutsideHandler);
    document.addEventListener("mousedown", searchOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", DropDownMenuOutsideHandler);
      document.removeEventListener("mousedown", searchOutsideHandler);
    };
  }, []);

  const searchHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(!isFocused);
    }
  };

  const avatarEvent = () => {
    setAvatarIsActiv(!avatarIsActiv);
  };

  const dropDownMenuHandler = () => {
    setAvatarIsActiv(!avatarIsActiv);
  };

  const searchInputEvent = () => {
    setIsFocused(!isFocused);
  };

  return (
    <header className={styles.header}>
      <hr className={styles.devider} />
      <div className={styles.logoBage}>
        <img src={vkLogo} alt="vkLogo" className={styles.vkLogo} />
        <h1>ВКОНТАКТЕ</h1>
      </div>
      <div className={styles.searchContainer} ref={searchRef}>
        <div className={styles.inputGroup}>
          <button onClick={searchHandler} className={styles.inputLeftAddon}>
            <Search />
          </button>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск"
            onClick={searchInputEvent}
            ref={inputRef}
          />
        </div>
        {isFocused && <HeaderPopup />}
      </div>
      <div className={`${styles.avatar} ${avatarIsActiv ? styles.active : ""}`} ref={dproDownMenuRef}>
        <button className={styles.avatarButton} onClick={avatarEvent}>
          <img
            src="https://i.pinimg.com/564x/0f/86/4b/0f864b918af5a8310fed7c12e76468a9.jpg"
            alt="Avatar"
            className={styles.avatarPhoto}
          />
          <ChevronDown />
        </button>
        <div
          className={`${styles.dropDownMenu} ${avatarIsActiv ? styles.active : styles.inactive}`}
          onClick={dropDownMenuHandler}
        >
          <DropDownContent />
        </div>
      </div>
    </header>
  );
}
