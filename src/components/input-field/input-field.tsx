import styles from "./input-field.module.scss";

import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

import { Input } from "@chakra-ui/react";
import { AvatarUrl } from "@shared/constant";

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
        {isActive ? <></> : <Input placeholder="Что у вас нового?" variant="unstyled" />}
      </div>
      {isActive ? (
        <>
          <hr />
          <div className={styles.popoverContent} onClick={(e) => e.stopPropagation()}>
            <textarea className={styles.inputTextArea} placeholder="Что у вас нового?">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate dolore unde obcaecati mollitia,
              ipsum minima autem doloribus corrupti asperiores commodi, earum amet. Excepturi, accusamus dolor maxime
              autem nam soluta.
            </textarea>
            <hr />
            <button className={styles.popoverButton}>отправить</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
