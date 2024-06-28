import { Post } from "@shared/types";
import styles from "./user-post-preview.module.scss";
import { extractDateFromTimestamp } from "@shared/lib";

interface Props {
  post: Post;
}

export function UserPostPreview({ post }: Props) {
  const createdAt = extractDateFromTimestamp(Number(post.createdAt));

  return (
    <>
      <div className={styles.userInfo}>
        <img src={post.authorPhoto} alt="User Avatar" className={styles.avatar} />
        <div className={styles.userDetails}>
          <span className={styles.userName}>{post.authorName}</span>
          <span className={styles.date}>{createdAt}</span>
        </div>
      </div>
    </>
  );
}
