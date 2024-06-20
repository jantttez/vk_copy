import { SideBar } from "@components/index";
import styles from "./main-skeleton.module.scss";
import { ReactNode } from "react";

interface MainSkeletonProps {
  component: ReactNode;
}

export function MainSkeleton({ component }: MainSkeletonProps) {
  return (
    <main className={styles.mainContainer}>
      <SideBar />
      {component}
    </main>
  );
}
