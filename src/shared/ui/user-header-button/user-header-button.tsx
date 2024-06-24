import { LucideProps } from "lucide-react";
import styles from "./user-header-button.module.scss";
import { ForwardRefExoticComponent } from "react";

interface Props {
  title?: string;
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  clickAction?: () => void;
  [key: string]: any;
}

export function UserHeaderButton({ title, Icon, clickAction, ...props }: Props) {
  return (
    <div className={styles.button} onClick={clickAction}>
      <button>{Icon ? <Icon {...props} /> : <></>}</button>
      <h3>{title}</h3>
    </div>
  );
}
