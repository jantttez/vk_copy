import styles from "./side-bar-button.module.scss";
import { ReactNode } from "react";

interface Props {
  title: string;
  clickAction?: () => void;
  Icon: ReactNode;
}

export function SideBarButton({ title, clickAction, Icon }: Props) {
  return (
    <button className={styles.button} onClick={clickAction}>
      {Icon}
      <span>{title}</span>
    </button>
  );
}
