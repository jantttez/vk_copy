import { useMutation } from '@apollo/client';
import { DELETE_POST_BY_ID } from '@shared/api';

export function useDeletePost({ postId }: { postId: string }) {
  const [DELETE_POST, { loading, error }] = useMutation(DELETE_POST_BY_ID, {
    variables: { id: postId },
    refetchQueries: ['GET_POSTS', 'GET_USER_POSTS'],
  });

  return { DELETE_POST, loading, error };
}
