import styles from "./filter-field.module.scss";
import { Selector } from "@shared/ui";

export function FilterField() {
  return (
    <div className={styles.main}>
      <Selector />
      <hr className={styles.devider} />
      <Selector />
    </div>
  );
}
