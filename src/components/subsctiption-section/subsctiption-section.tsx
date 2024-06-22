import styles from "./subsctiption-section.module.scss";

import { subscriptions } from "@shared/constant";

export function SubscriptionsSection() {
  return (
    <div className={styles.subscriptionsSection}>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2>Подписки</h2>
          <span>{subscriptions.length}</span>
        </div>
        <div className={styles.subList}>
          {subscriptions.map((subscription) => (
            <div key={subscription.id} className={styles.subBox}>
              <img src={subscription.avatar} alt={subscription.name} className={styles.avatar} />
              <div>
                <h1>title</h1>
                <h3>disciption</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
