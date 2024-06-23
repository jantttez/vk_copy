import { FilterField, InputField, PostList } from "@components/index";
import styles from "./main-feed-section.module.scss";
import { useRef, useState } from "react";
import { Post } from "@shared/types";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

export function MainFeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const { data, error, loading } = useQuery(GET_POSTS);

  return (
    <div className={styles.mainContainer}>
      <section className={styles.feed}>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        {loading ? <Spinner /> : error ? <div>Error {error.message}</div> : <></>}
        {data ? <PostList posts={data["posts"] as Post[]} /> : <></>}
      </section>
      <div className={styles.rightSection}>
        <FilterField />
      </div>
    </div>
  );
}
