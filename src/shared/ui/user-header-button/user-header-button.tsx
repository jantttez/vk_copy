import { LucideProps } from "lucide-react";
import styles from "./user-header-button.module.scss";
import { ForwardRefExoticComponent } from "react";

interface Props {
  title?: string;
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  [key: string]: any;
}

export function UserHeaderButton({ title, Icon, ...props }: Props) {
  return (
    <div className={styles.button}>
      <button>{Icon ? <Icon {...props} /> : <></>}</button>
      <h3>{title}</h3>
    </div>
  );
}
