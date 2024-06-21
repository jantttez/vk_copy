import styles from "./drop-down-content.module.scss";

import { Settings, LogOut, Sun, Moon, Check, Palette } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import avatarka from "@shared/assets/Смысл.jpg";
import { DropDownMenuButton } from "@shared/ui";
import { Theme } from "@shared/types";
import { useClickOutside, useUpdateTheme } from "@shared/hooks";
import { useThemeStore } from "src/store";
import { useShallow } from "zustand/react/shallow";

export function DropDownContent() {
  const [themeMenuIsOpen, setThemeIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const { theme, setTheme } = useThemeStore(useShallow((state) => state));

  useClickOutside({ ref: subMenuRef, setState: setThemeIsMenuOpen });

  useUpdateTheme({ theme: theme });

  const handleThemeClick = () => {
    setThemeIsMenuOpen(!themeMenuIsOpen);
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleLogout = () => {};

  return (
    <div className={styles.dropdownContent} onClick={(e) => e.stopPropagation()}>
      <img src={avatarka} alt="User Avatar" className={styles.avatar} />
      <p className={styles.userId}>ID: 12345</p>
      <DropDownMenuButton Icon={Palette} handleClick={handleThemeClick} title="Change Theme" />
      {themeMenuIsOpen && (
        <div className={styles.subMenu} ref={subMenuRef} onClick={() => setTheme(Theme.light)}>
          <div className={styles.subMenuItem}>
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

      <DropDownMenuButton Icon={LogOut} handleClick={handleLogout} title="Logout" />
    </div>
  );
}
