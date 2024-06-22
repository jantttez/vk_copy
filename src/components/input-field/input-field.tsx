import styles from "./input-field.module.scss";

import { Dispatch, MutableRefObject, SetStateAction } from "react";

import { Input } from "@chakra-ui/react";
import { SendHorizontal } from "lucide-react";

import { useClickOutside } from "@shared/hooks";
import { useUserStore } from "@shared/lib/storage/use-user-store";

interface Props {
  inputFieldRef: MutableRefObject<HTMLDivElement | null>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export function InputField({ inputFieldRef, isActive, setIsActive }: Props) {
  useClickOutside<HTMLDivElement>({ ref: inputFieldRef, setState: setIsActive });

  const currentUser = useUserStore((state) => state.user);

  const fieldActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.InputField} ref={inputFieldRef} onClick={fieldActiveHandler}>
      <div className={styles.inputContainer}>
        <img src={currentUser?.userPhoto} alt="avatar" className={styles.inputImage} />
        {isActive ? (
          <Input placeholder="Url изображения..." variant="unstyled" />
        ) : (
          <Input placeholder="Что у вас нового?" variant="unstyled" />
        )}
        <button className={styles.popoverButton} onClick={() => console.log("hello")}>
          <SendHorizontal />
        </button>
      </div>
      {isActive ? (
        <>
          <hr />
          <div className={styles.popoverContent} onClick={(e) => e.stopPropagation()}>
            <textarea className={styles.inputTextArea} placeholder="Что у вас нового?"></textarea>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
