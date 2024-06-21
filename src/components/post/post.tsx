import styles from "./post.module.scss";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

import { IPost } from "@shared/types";
import { useState } from "react";
import CommentsList from "@components/comment-list/comment-list";

//TODO: сделать секцию с комментариями

export function Post({ userAvatar, userName, date, text, image }: IPost) {
  const [writeComment, setWriteComment] = useState(false);

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img src={userAvatar} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{userName}</span>
            <span className={styles.date}>{date}</span>
          </div>
        </div>
        <button className={styles.menuButton}>
          <MoreHorizontal />
        </button>
      </div>
      <div className={styles.main}>
        <p className={styles.text}>{text}</p>
        {image ? <img src={image} alt="Post Image" className={styles.image} /> : <></>}
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
