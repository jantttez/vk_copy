import { FilterField, InputField, PostList } from "@components/index";
import styles from "./main-feed-section.module.scss";
import { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

export function MainFeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  // const [posts, setPosts] = useState<Post[]>([]);
  // const limit = 20;
  // const [offeset, setOffset] = useState(0);
  // // const page = 1;
  // const observblRef = useRef<HTMLDivElement | null>(null);

  const { data, loading: dataLoading, error: dataError } = useQuery(GET_POSTS);

  // const [get_posts_with_pagination, { data: postPaginData, loading, error }] = useLazyQuery(GET_POSTS_WITH_PAGINATION);

  // const callBack = () => {
  //   get_posts_with_pagination({
  //     variables: {
  //       limit: limit,
  //       offset: offeset,
  //     },
  //   });
  // };

  // useObserve(observblRef, callBack, loading, true);

  // useEffect(() => {
  //   if (postPaginData && postPaginData["posts_aggregate"]["nodes"]) {
  //     const newSection = postPaginData["posts_aggregate"]["nodes"] as Post[];
  //     const newPosts = [...posts, ...newSection];
  //     setPosts(newPosts);
  //   }
  // }, [postPaginData]);

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
