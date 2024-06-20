import { InputField, PostList } from "@components/index";
import styles from "./main-feed-section.module.scss";
import { useRef, useState } from "react";
import { mockPosts } from "@shared/constant";

export function MainFeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <section className={styles.feed}>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        <PostList posts={mockPosts} />
      </section>
      <div className={styles.rightSection}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia praesentium maxime animi blanditiis provident
        alias illo, ut dicta voluptatibus laudantium vitae corrupti fuga deserunt ducimus omnis ipsum. Quia, inventore
        iure.
      </div>
    </div>
  );
}
