import { SubscriptionCard } from "@components/subsctiption-card/subsctiption-card";
import styles from "./subsctiption-section.module.scss";

import { Subscription } from "@shared/types";

interface Props {
  subscriptions: Subscription[] | undefined;
}

export function SubscriptionsSection({ subscriptions }: Props) {
  return (
    <>
      {subscriptions ? (
        <div className={styles.subscriptionsSection}>
          <div className={styles.section}>
            <div className={styles.header}>
              <h2>Подписки</h2>
              <span>{subscriptions.length}</span>
            </div>
            <div className={styles.subList}>
              {subscriptions.slice(0, 3).map((subscription) => (
                <SubscriptionCard subscription={subscription} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
