import styles from "./side-bar.module.scss";
import { SideBarButton } from "@shared/ui/index";
import { User } from "lucide-react";

export function SideBar() {
  return (
    <div className={styles.sideBar}>
      <SideBarButton title="Моя страница" Icon={<User />} />

      <hr className={styles.divider} />
    </div>
  );
}
