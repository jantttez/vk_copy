import { useMutation } from '@apollo/client';
import { GET_POSTS, UPDATE_POST_LIKES } from '@shared/api';

export function useUpdatePostLikes() {
  const [updatePostLikes, { loading, error }] = useMutation(UPDATE_POST_LIKES, {
    refetchQueries: [GET_POSTS, 'GET_POSTS'],
  });

  return { updatePostLikes, loading, error };
}
