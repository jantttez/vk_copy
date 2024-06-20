import { User } from "lucide-react";
import styles from "./side-bar-button.module.scss";

export function SideBarButton() {
  return (
    <button className={styles.button}>
      <User color="#0d00ff" size={20} />
      <span>Button 1</span>
    </button>
  );
}
