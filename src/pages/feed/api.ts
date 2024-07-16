import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@shared/api';

export function useFeedPosts() {
  const { data, loading, error } = useQuery(GET_POSTS);
  return { data, loading, error };
}
