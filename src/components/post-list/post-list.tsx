import styles from "./post-list.module.scss";

import { Post } from "@components/index";
import { IPost } from "@shared/types";

interface PostListProps {
  posts: IPost[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userAvatar={post.userAvatar}
          userName={post.userName}
          date={post.date}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}
