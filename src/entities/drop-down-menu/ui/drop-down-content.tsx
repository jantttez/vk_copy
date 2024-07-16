import styles from './drop-down-content.module.scss';

import { Settings, LogOut, Sun, Moon, Palette } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { DropDownMenuButton } from './drop-down-menu-button';
import { useClickOutside } from '@shared/hooks';
import { useUserStore } from '@entities/user';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

export function DropDownContent() {
  const [themeMenuIsOpen, setThemeIsMenuOpen] = useState(false);
  const navigator = useNavigate();
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const currentUser = useUserStore((state) => state.user);

  useClickOutside({ ref: subMenuRef, setState: setThemeIsMenuOpen });

  const handleThemeClick = () => {
    setThemeIsMenuOpen(!themeMenuIsOpen);
  };

  const handleSettingsClick = () => {
    navigator('/settings');
  };

  const handleLogout = () => {
    Cookies.remove('access-token');
    Cookies.remove('userId');

    navigator('/');
  };

  const ThemeIcon = useColorModeValue(Sun, Moon);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.dropdownContent} onClick={(e) => e.stopPropagation()}>
      <img src={currentUser?.userPhoto} alt='User Avatar' className={styles.avatar} />
      <p className={styles.userId}>ID: {currentUser?.id}</p>
      <DropDownMenuButton Icon={Palette} handleClick={handleThemeClick} title='Change Theme' />
      {themeMenuIsOpen && (
        <div className={styles.subMenu} ref={subMenuRef}>
          <div className={styles.subMenuItem} onClick={toggleColorMode}>
            <ThemeIcon />
            <h3>{colorMode}</h3>
          </div>
        </div>
      )}
      <DropDownMenuButton Icon={Settings} handleClick={handleSettingsClick} title='Settings' />

      <DropDownMenuButton Icon={LogOut} handleClick={handleLogout} title='Logout' />
    </div>
  );
}
