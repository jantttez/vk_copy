import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./modal-window.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export function ModalWindow({ isActive, setIsActive, children }: Props) {
  const rootclasses = [styles.modalWindow];
  if (isActive) {
    rootclasses.push(styles.active);
  }

  return (
    <div className={rootclasses.join(" ")} onClick={() => setIsActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
