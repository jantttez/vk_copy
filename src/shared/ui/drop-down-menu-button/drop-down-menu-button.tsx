import { LucideProps } from "lucide-react";
import styles from "./drop-down-menu-button.module.scss";
import { ForwardRefExoticComponent } from "react";

interface Props {
  handleClick: () => void;
  title: string;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export function DropDownMenuButton({ handleClick, Icon, title, ...props }: Props) {
  return (
    <button className={styles.menuItem} onClick={handleClick}>
      <Icon className={styles.icon} {...props} />
      <span>{title}</span>
    </button>
  );
}
