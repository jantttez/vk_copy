import styles from "./input-field.module.scss";

import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

import { Input } from "@chakra-ui/react";
import { AvatarUrl } from "@shared/constant";
import { SendHorizontal } from "lucide-react";

import { lorem } from "@shared/constant";

interface Props {
  inputFieldRef: MutableRefObject<HTMLDivElement | null>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export function InputField({ inputFieldRef, isActive, setIsActive }: Props) {
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (inputFieldRef.current && !inputFieldRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [inputFieldRef, setIsActive]);

  const fieldActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.InputField} ref={inputFieldRef} onClick={fieldActiveHandler}>
      <div className={styles.inputContainer}>
        <img src={AvatarUrl} alt="avatar" className={styles.inputImage} />
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
            <textarea className={styles.inputTextArea} defaultValue={lorem} placeholder="Что у вас нового?"></textarea>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
