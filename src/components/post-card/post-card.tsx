import styles from "./post-card.module.scss";
import { MoreHorizontal, Heart, MessageSquare } from "lucide-react";

import { Post as IPost } from "@shared/types";
import { useEffect, useState } from "react";
import { ShowMore, CommentsList, ModalWindow } from "@components/index";
import { useMutation } from "@apollo/client";
import { DELETE_POST_BY_ID, GET_POSTS, UPDATE_POST_LIKES } from "@shared/api";
import { getUserId } from "@shared/lib";
import { Spinner } from "@chakra-ui/react";
import { UserPostPreview } from "@entities/user";
import { PostModalContent } from "@entities/post/post-modal-content";
import { PostImageCard } from "@entities/post/post-image";
import { PostContentCard } from "@entities/post/post-content-card";
import { Box, Button } from "@shared/ui";

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
  }, [post.likes, userId]);

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

  if (likesError) return <div>error: {likesError.message}</div>;

  return (
    <Box className={styles.post}>
      <Box className="flex justify-between items-center">
        <UserPostPreview post={post} />

        <Button
          className={styles.menuButton}
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <MoreHorizontal />
          {showMore && <ShowMore authorId={post.authorId} loading={loading} error={error} deleteAction={DELETE_POST} />}
        </Button>
      </Box>
      <Box className="mt-4">
        <PostContentCard content={post.postContent} />
        {post.postImage && post.postImage !== null && (
          <Box onClick={() => setImageZoom(!imageZoom)} className="cursor-pointer">
            <ModalWindow isActive={imageZoom} setIsActive={setImageZoom}>
              <PostModalContent likes={post.likes} postImage={post.postImage} />
            </ModalWindow>
            <PostImageCard image={post.postImage} />
          </Box>
        )}
      </Box>
      <Box className="flex justify-start mt-4">
        {likesUpdateLoading ? (
          <Spinner />
        ) : (
          <Button className={styles.actionButton} onClick={lieksHandler}>
            <Heart style={postIsLiked ? { color: "red" } : { color: "gray" }} />
            <span>Like</span>
          </Button>
        )}

        <button className={styles.actionButton} onClick={() => setWriteComment(!writeComment)}>
          <MessageSquare />
          <span>Comment</span>
        </button>
      </Box>
      {writeComment && <CommentsList postId={post.id} />}
    </Box>
  );
}
