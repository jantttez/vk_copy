import styles from "./post-card.module.scss";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

import { Post as IPost } from "@shared/types";
import { useState } from "react";
import CommentsList from "@components/comment-list/comment-list";

//TODO: сделать секцию с комментариями

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  const [writeComment, setWriteComment] = useState(false);

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img src={post.authorPhoto} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{post.authorName}</span>
            <span className={styles.date}>{post.createdAt}</span>
          </div>
        </div>
        <button className={styles.menuButton}>
          <MoreHorizontal />
        </button>
      </div>
      <div className={styles.main}>
        <p className={styles.text}>{post.postContent}</p>
        {post.postImage ? <img src={post.postImage} alt="Post Image" className={styles.image} /> : <></>}
      </div>
      <div className={styles.footer}>
        <button className={styles.actionButton}>
          <Heart />
          <span>Like</span>
        </button>
        <button className={styles.actionButton} onClick={() => setWriteComment(!writeComment)}>
          <MessageSquare />
          <span>Comment</span>
        </button>
      </div>
      {writeComment ? <CommentsList /> : <></>}
    </div>
  );
}
