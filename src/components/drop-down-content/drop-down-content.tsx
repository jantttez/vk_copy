import styles from "./drop-down-content.module.scss";

import { Settings, LogOut, Sun, Moon, Check, Palette } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { DropDownMenuButton } from "@shared/ui";
import { Theme } from "@shared/types";
import { useClickOutside, useLogout, useUpdateTheme } from "@shared/hooks";
import { useThemeStore, useUserStore } from "@store/index";
import { useShallow } from "zustand/react/shallow";

export function DropDownContent() {
  const [themeMenuIsOpen, setThemeIsMenuOpen] = useState(false);
  const navigator = useNavigate();
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const currentUser = useUserStore((state) => state.user);

  const { theme, setTheme } = useThemeStore(useShallow((state) => state));

  useClickOutside({ ref: subMenuRef, setState: setThemeIsMenuOpen });

  useUpdateTheme({ theme: theme });

  const handleThemeClick = () => {
    setThemeIsMenuOpen(!themeMenuIsOpen);
  };

  const handleSettingsClick = () => {
    navigator("/settings");
  };

  const handleLogout = () => {
    const navigator = useNavigate();
    Cookies.remove("access-token");
    Cookies.remove("userId");

    navigator("/");
  };

  const logout = useLogout();

  return (
    <div className={styles.dropdownContent} onClick={(e) => e.stopPropagation()}>
      <img src={currentUser?.userPhoto} alt="User Avatar" className={styles.avatar} />
      <p className={styles.userId}>ID: {currentUser?.id}</p>
      <DropDownMenuButton Icon={Palette} handleClick={handleThemeClick} title="Change Theme" />
      {themeMenuIsOpen && (
        <div className={styles.subMenu} ref={subMenuRef}>
          <div className={styles.subMenuItem} onClick={() => setTheme(Theme.light)}>
            <Sun /> Light
            {theme === Theme.light ? (
              <div className={styles.check}>
                <Check size={18} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.subMenuItem} onClick={() => setTheme(Theme.dark)}>
            <Moon /> Dark
            {theme === Theme.dark ? (
              <div className={styles.check}>
                <Check size={18} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      <DropDownMenuButton Icon={Settings} handleClick={handleSettingsClick} title="Settings" />

      <DropDownMenuButton Icon={LogOut} handleClick={logout} title="Logout" />
    </div>
  );
}
