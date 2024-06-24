import styles from "./post-list.module.scss";

import { PostCard } from "@components/index";
import { Post } from "@shared/types";

interface Props {
  posts: Post[];
}

export function PostList({ posts }: Props) {
  return (
    <>
      {posts ? (
        <div className={styles.postList}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
