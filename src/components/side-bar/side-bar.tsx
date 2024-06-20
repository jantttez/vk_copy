import styles from "./side-bar.module.scss";
import { SideBarButton } from "@shared/ui/index";

export function SideBar() {
  return (
    <div className={styles.sideBar}>
      <SideBarButton />
      <SideBarButton />
      <SideBarButton />
      <SideBarButton />
      <SideBarButton />
      <hr className={styles.divider} />
      <SideBarButton />
    </div>
  );
}
