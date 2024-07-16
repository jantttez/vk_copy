import { getUserId } from '@shared/lib';

interface Props {
  updatePostLikes: (variables: any) => void;
  postIsLiked: boolean;
  postLikes: string[];
  postId: string;
}

export const LikePost = ({ updatePostLikes, postIsLiked, postLikes, postId }: Props) => {
  const userId = getUserId();
  if (!postIsLiked) {
    const newLikes = [...postLikes, userId];
    updatePostLikes({
      variables: { postId: postId, likes: newLikes },
    });
  } else if (postIsLiked) {
    const newLIkes = postLikes.filter((like) => like !== userId);
    updatePostLikes({
      variables: { postId: postId, likes: newLIkes },
    });
  }
};
