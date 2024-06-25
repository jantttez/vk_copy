import styles from "./header-popup.module.scss";

import { Person } from "@shared/types";
import { Spinner } from "@chakra-ui/react";
import { PopupUserCard } from "@components/index";

interface Props {
  people: Person[];
}

export function HeaderPopup({ people }: Props) {
  return (
    <div className={styles.popup}>
      <h2>Люди</h2>
      <hr className={styles.divider} />
      <ul className={styles.peopleList}>
        {people ? people.map((person) => <PopupUserCard person={person} />) : <Spinner />}
      </ul>
    </div>
  );
}
