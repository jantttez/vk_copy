import { ReactNode } from "react";
import styles from "./modal-window.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: () => void;
  children: ReactNode;
}

export function ModalWindow({ isActive, setIsActive, children }: Props) {
  const rootClasses = [styles.modalWindow];

  if (isActive) {
    rootClasses.join(styles.active);
  }

  //onClick={(e) => setIsActive(false)} надо подумать мб я сделаю с помощью useBoolean стейт

  return (
    <div className={rootClasses.join(" ")}>
      <div className={styles.moadlContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
