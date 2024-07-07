import { useQuery } from '@apollo/client';
import { GET_POST_COMMENTS } from '@shared/api';

export function usePostComments(postId: string) {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { postId: postId },
  });
  return { data, loading, error };
}
