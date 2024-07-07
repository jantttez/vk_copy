import styles from './ui.module.scss';
import { MoreHorizontal, MessageSquare } from 'lucide-react';

import { useState } from 'react';
import { UserPostPreview, useUserStore } from '@entities/user';
import { PostModalContent, PostContentCard, PostImageCard, Post as IPost } from '@entities/post';
import { Box, Button, ModalWindow } from '@shared/ui';
import { usePostLiked } from './lib';
import { AddComment, CommentDelete, CommentForm, useCommentForm } from '@features/comment';
import { CommentModel, usePostComments, Comment } from '@entities/comment';
import { Spinner } from '@chakra-ui/react';
import { getUserId } from '@shared/lib';
import { LikePostBtn, ShowMoreSection } from '@features/post';

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  const [writeComment, setWriteComment] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [postIsLiked, setPostIsLiked] = useState(false);
  const { data, loading, error } = usePostComments(post.id);
  const currentUser = useUserStore((state) => state.user);
  const userId = getUserId();

  const { watch, register, reset } = useCommentForm();

  usePostLiked({ likes: post.likes, setPostIsLiked: setPostIsLiked, userId: userId! });

  if (!currentUser) return null;
  if (!userId) return null;

  const inputContent = watch('commentContent');

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;
  if (!data) return <div>нету</div>;

  return (
    <Box className={styles.post}>
      <Box className='flex justify-between items-center'>
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
      <Box className='mt-4'>
        <PostContentCard content={post.postContent} />
        {post.postImage && post.postImage !== null && (
          <Box onClick={() => setImageZoom(!imageZoom)} className='cursor-pointer'>
            <ModalWindow isActive={imageZoom} setIsActive={setImageZoom}>
              <PostModalContent likes={post.likes} postImage={post.postImage} />
            </ModalWindow>
            <PostImageCard image={post.postImage} />
          </Box>
        )}
      </Box>
      <Box className='flex justify-start mt-4'>
        <LikePostBtn postId={post.id} postIsLiked={postIsLiked} postLikes={post.likes} />

        <Button className={styles.actionButton} onClick={() => setWriteComment(!writeComment)}>
          <MessageSquare />
          <span>Comment</span>
        </Button>
      </Box>
      {writeComment && (
        <Box className='my-3 mx-0'>
          {data.comments.map((comment: CommentModel) => (
            <Box key={comment.id}>
              <hr />
              <Comment comment={comment} renderCommentDeleteButton={() => <CommentDelete commentId={comment.id} />} />
            </Box>
          ))}

          <CommentForm
            register={register}
            renderAddComment={() => (
              <AddComment
                authorId={currentUser.id}
                authorName={currentUser.name}
                authorPhoto={currentUser.userPhoto}
                inputContent={inputContent}
                loading={loading}
                postId={post.id}
                reset={reset}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
}
