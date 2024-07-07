import { useQuery } from '@apollo/client';
import { GET_USER_FRIENDS_IDS } from '@shared/api';

export function usePopupPeople(userId: string) {
  const { data, loading, error } = useQuery(GET_USER_FRIENDS_IDS, {
    variables: { id: userId },
  });

  return { data, loading, error };
}
