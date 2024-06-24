import { UserRoundPlus } from "lucide-react";
import styles from "./header-popup.module.scss";

import { Person } from "@shared/types";
import { Spinner } from "@chakra-ui/react";

interface Props {
  people: Person[];
  onAddFriend: (id: number) => void;
}

export function HeaderPopup({ people, onAddFriend }: Props) {
  return (
    <div className={styles.popup}>
      <h2>Люди</h2>
      <hr className={styles.divider} />
      <ul className={styles.peopleList}>
        {people ? (
          people.map((person) => (
            <li key={person.id} className={styles.personItem}>
              <img src={person.userPhoto} alt={person.name} className={styles.avatar} />
              <span className={styles.name}>{person.name}</span>
              <button className={styles.addButton} onClick={() => onAddFriend(person.id)}>
                <UserRoundPlus size={20} />
              </button>
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
}
