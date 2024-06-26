import styles from "./post-card.module.scss";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

import { Post as IPost } from "@shared/types";
import { useEffect, useState } from "react";
import { ShowMore, CommentsList, ModalWindow } from "@components/index";
import { useMutation } from "@apollo/client";
import { DELETE_POST_BY_ID, GET_POSTS, UPDATE_POST_LIKES } from "@shared/api";
import { extractDateFromTimestamp, getUserId } from "@shared/lib";
import { Spinner } from "@chakra-ui/react";

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  const [writeComment, setWriteComment] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [postIsLiked, setPostIsLiked] = useState(false);

  const userId = getUserId();

  useEffect(() => {
    const check = post.likes.some((like) => like === userId);

    if (check) {
      setPostIsLiked(true);
    } else {
      setPostIsLiked(false);
    }
  }, [post.likes, userId]); //если добавить postisLiked в зависимости то будет типо эффект моргания как лампочки..

  const [updatePostLikes, { loading: likesUpdateLoading, error: likesError }] = useMutation(UPDATE_POST_LIKES, {
    refetchQueries: [GET_POSTS, "GET_POSTS"],
  });

  const lieksHandler = () => {
    if (!postIsLiked) {
      const newLikes = [...post.likes, userId];
      updatePostLikes({
        variables: { postId: post.id, likes: newLikes },
      });
    } else if (postIsLiked) {
      const newLIkes = post.likes.filter((like) => like !== userId);
      updatePostLikes({
        variables: { postId: post.id, likes: newLIkes },
      });
    }
  };

  const [DELETE_POST, { loading, error }] = useMutation(DELETE_POST_BY_ID, {
    variables: { id: post.id },
    refetchQueries: ["GET_POSTS", "GET_USER_POSTS"],
  });

  const createrAt = extractDateFromTimestamp(Number(post.createdAt));

  if (likesError) return <div>error: {likesError.message}</div>;

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
          <div onClick={() => setImageZoom(!imageZoom)} style={{ cursor: "pointer" }}>
            <ModalWindow isActive={imageZoom} setIsActive={setImageZoom}>
              <div className={styles.modalImageContent}>
                <img src={post.postImage} alt="Post Image" style={{ borderRadius: "15px" }} />
                <Heart />
                {post.likes.length}
              </div>
            </ModalWindow>
            <img src={post.postImage} alt="Post Image" className={styles.image} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.footer}>
        {likesUpdateLoading ? (
          <Spinner />
        ) : (
          <button className={styles.actionButton} onClick={lieksHandler}>
            <Heart style={postIsLiked ? { color: "red" } : { color: "gray" }} />
            <span>Like</span>
          </button>
        )}

        <button className={styles.actionButton} onClick={() => setWriteComment(!writeComment)}>
          <MessageSquare />
          <span>Comment</span>
        </button>
      </div>
      {writeComment ? <CommentsList postId={post.id} /> : <></>}
    </div>
  );
}
