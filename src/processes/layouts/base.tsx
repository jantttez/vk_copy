import { SideBar } from "@widgets/index";
import styles from "./main-skeleton.module.scss";
import { ReactNode } from "react";

interface Props {
  component: ReactNode;
}

export function Base({ component }: Props) {
  return (
    <main className={styles.mainContainer}>
      <SideBar />
      {component}
    </main>
  );
}
