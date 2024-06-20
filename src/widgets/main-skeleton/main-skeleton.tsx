import { SideBar } from "@components/index";
import styles from "./main-skeleton.module.scss";

interface MainSkeletonProps {
  component: React.ReactNode;
}

export function MainSkeleton({ component }: MainSkeletonProps) {
  return (
    <main className={styles.mainContainer}>
      <SideBar />
      {component}
    </main>
  );
}
