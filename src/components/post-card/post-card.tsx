import styles from "./post-card.module.scss";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

import { Post as IPost } from "@shared/types";
import { useState } from "react";
import { ShowMore, CommentsList } from "@components/index";
import { useMutation } from "@apollo/client";
import { DELETE_POST_BY_ID } from "@shared/api";
import { extractDateFromTimestamp } from "@shared/lib";

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  const [writeComment, setWriteComment] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [DELETE_POST, { loading, error }] = useMutation(DELETE_POST_BY_ID, {
    variables: { id: post.id },
    refetchQueries: ["GET_POSTS", "GET_USER_POSTS"],
  });

  const createrAt = extractDateFromTimestamp(Number(post.createdAt));

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img src={post.authorPhoto} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{post.authorName}</span>
            <span className={styles.date}>{createrAt}</span>
          </div>
        </div>
        <button
          className={styles.menuButton}
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <MoreHorizontal />
          {showMore ? (
            <ShowMore authorId={post.authorId} loading={loading} error={error} deleteAction={DELETE_POST} />
          ) : (
            <></>
          )}
        </button>
      </div>
      <div className={styles.main}>
        <p className={styles.text}>{post.postContent}</p>
        {post.postImage && post.postImage !== null ? (
          <img src={post.postImage} alt="Post Image" className={styles.image} />
        ) : (
          <></>
        )}
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
      {writeComment ? <CommentsList postId={post.id} /> : <></>}
    </div>
  );
}
