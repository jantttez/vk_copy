import styles from "./input-field.module.scss";

import { Input } from "@chakra-ui/react";
import { AvatarUrl } from "@shared/constant/mockUrl";

export function InputField() {
  const isActive = false;
  return (
    <div className={styles.InputField}>
      <div className={styles.inputContainer}>
        <img src={AvatarUrl} alt="avatar" className={styles.inputImage} />
        <Input placeholder="Что у вас нового?" variant="unstyled" />
      </div>

      {isActive ? (
        <>
          <hr />
          <div className={styles.popoverContent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate dolore unde obcaecati mollitia,
              ipsum minima autem doloribus corrupti asperiores commodi, earum amet. Excepturi, accusamus dolor maxime
              autem nam soluta.
            </p>
            <button className={styles.popoverButton}>отправить</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
