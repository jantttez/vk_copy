import { Subscription } from "@shared/types";
import styles from "./subsctiption-card.module.scss";

interface Props {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: Props) {
  return (
    <div key={subscription.id} className={styles.subBox}>
      <img src={subscription.photo} alt={subscription.name} className={styles.avatar} />
      <div>
        <h1>{subscription.name}</h1>
        <h3>{subscription.descriptions}</h3>
      </div>
    </div>
  );
}
