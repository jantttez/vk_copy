import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { ChevronDown, Search } from "lucide-react";
import vkLogo from "@shared/assets/vkLogo.svg";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [avatarIsActiv, setAvatarIsActiv] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dproDownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideHandler = (e: any) => {
      if (dproDownMenuRef.current && !dproDownMenuRef.current.contains(e.target)) {
        setAvatarIsActiv(false);
      }
    };

    document.addEventListener("mousedown", outsideHandler);

    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  }, []);

  const searchHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const avatarEvent = () => {
    setAvatarIsActiv(!avatarIsActiv);
  };

  const dropDownMenuHandler = () => {
    setAvatarIsActiv(!avatarIsActiv);
  };

  return (
    <header className={styles.header}>
      <hr className={styles.devider} />
      <div className={styles.logoBage}>
        <img src={vkLogo} alt="vkLogo" className={styles.vkLogo} />
        <h1>ВКОНТАКТЕ</h1>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.inputGroup}>
          <button onClick={searchHandler} className={styles.inputLeftAddon}>
            <Search />
          </button>
          <input
            ref={inputRef}
            className={styles.searchInput}
            type="text"
            placeholder="Поиск"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        {isFocused && <div className={styles.popup}>Привет</div>}
      </div>
      <div className={styles.avatar} ref={dproDownMenuRef}>
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
          <div className={styles.dropDownMEnuContent} onClick={(e) => e.stopPropagation()}>
            <h1>fullcontent</h1>
            <button>кнопка1</button>
            <button>кнопка2</button>
            <button>кнопка3</button>
            <button>кнопка4</button>
          </div>
        </div>
      </div>
    </header>
  );
}
