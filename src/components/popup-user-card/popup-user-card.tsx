import { UserRoundPlus } from "lucide-react";
import styles from "./popup-user-card.module.scss";
import { Person } from "@shared/types";

interface Props {
  person: Person;
}

export function PopupUserCard({ person }: Props) {
  return (
    <li key={person.id} className={styles.personItem}>
      <img src={person.userPhoto} alt={person.name} className={styles.avatar} />
      <span className={styles.name}>{person.name}</span>
      <button className={styles.addButton} onClick={() => {}}>
        <UserRoundPlus size={20} />
      </button>
    </li>
  );
}
