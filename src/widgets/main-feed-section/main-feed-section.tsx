import { FilterField, InputField, PostList } from "@components/index";
import styles from "./main-feed-section.module.scss";
import { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

export function MainFeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const { data, loading: dataLoading, error: dataError } = useQuery(GET_POSTS);

  return (
    <div className={styles.mainContainer}>
      <section className={styles.feed}>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        {dataLoading ? <Spinner /> : dataError ? <div>Error {dataError.message}</div> : <></>}
        {data ? (
          <>
            <PostList posts={data["posts"]} />
            <div style={{ justifySelf: "center", alignSelf: "center" }}></div>
          </>
        ) : (
          <></>
        )}
      </section>
      <div className={styles.rightSection}>
        <FilterField />
      </div>
    </div>
  );
}
