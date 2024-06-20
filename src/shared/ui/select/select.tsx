import { Select } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import styles from "./select.module.scss";

export function select() {
  return (
    <Select icon={<ChevronDown />} variant="unstyled" className={styles.selector}>
      <option value="" defaultValue="" className={styles.option}>
        Filtered By..
      </option>
      <option value="" className={styles.option}>
        qwwwwwwwwww
      </option>
      <option value="" className={styles.option}>
        qwwwwwwwwww
      </option>
      <option value="" className={styles.option}>
        qwwwwwwwwww
      </option>
      <option value="" className={styles.option}>
        qwwwwwwwwww
      </option>
    </Select>
  );
}
