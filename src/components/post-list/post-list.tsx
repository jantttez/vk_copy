import styles from "./post-list.module.scss";

import { PostCard } from "@components/index";
import { Post } from "@shared/types";
import { useEffect, useState } from "react";

interface Props {
  posts: Post[];
}

export function PostList({ posts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    let filtered = [...posts];

    filtered = filtered.sort((a, b) => b.createdAt - a.createdAt);

    setFilteredPosts(filtered);
  }, [posts]);

  console.log(typeof posts[0].createdAt);

  return (
    <>
      {filteredPosts ? (
        <div className={styles.postList}>
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
