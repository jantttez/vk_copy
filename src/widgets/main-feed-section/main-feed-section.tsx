import { FilterField, InputField, PostList } from "@components/index";
import styles from "./main-feed-section.module.scss";
import { useRef, useState } from "react";
import { Post } from "@shared/types";

export function MainFeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const mockPosts: Post[] = [];
  return (
    <div className={styles.mainContainer}>
      <section className={styles.feed}>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        <PostList posts={mockPosts} />
      </section>
      <div className={styles.rightSection}>
        <FilterField />
      </div>
    </div>
  );
}
