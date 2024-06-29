import styles from "./post-card.module.scss";
import { MoreHorizontal, MessageSquare } from "lucide-react";

import { Post as IPost } from "@shared/types";
import { useState } from "react";
import { CommentsList, ModalWindow } from "@components/index";
import { UserPostPreview } from "@entities/user";
import { PostModalContent } from "@entities/post/post-modal-content";
import { PostImageCard } from "@entities/post/post-image";
import { PostContentCard } from "@entities/post/post-content-card";
import { Box, Button } from "@shared/ui";
import { usePostLiked } from "../lib";
import { LikePostBtn } from "@features/post/like-post";
import { ShowMoreSection } from "@features/post/show-more";

interface Props {
  post: IPost;
}

export function Post({ post }: Props) {
  const [writeComment, setWriteComment] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [postIsLiked, setPostIsLiked] = useState(false);

  usePostLiked({ likes: post.likes, setPostIsLiked: setPostIsLiked });

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
          {showMore && <ShowMoreSection authorId={post.authorId} postId={post.id} />}
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
        <LikePostBtn postId={post.id} postIsLiked={postIsLiked} postLikes={post.likes} />

        <Button className={styles.actionButton} onClick={() => setWriteComment(!writeComment)}>
          <MessageSquare />
          <span>Comment</span>
        </Button>
      </Box>
      {writeComment && <CommentsList postId={post.id} />}
    </Box>
  );
}
