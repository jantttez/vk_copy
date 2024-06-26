import styles from "./post-list.module.scss";

import { PostCard } from "@components/index";
import { useFilterList } from "@shared/hooks";
import { Post } from "@shared/types";
import { useState } from "react";

interface Props {
  posts: Post[];
}

export function PostList({ posts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useFilterList({ posts: posts, setFilteredPosts: setFilteredPosts });

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
