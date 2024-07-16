import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER_FRIEND, GET_USER_FRIENDS_IDS, GET_USER_POSTS } from '@shared/api';
import { useEffect } from 'react';

export function useUserPosts(userId: string) {
  const { data, loading } = useQuery(GET_USER_POSTS, {
    variables: { id: userId },
  });
  return { data, loading };
}

export function useUserFriendsdIds(userId: string) {
  const { data: friendsIdsData, loading: friendsIdsLoading } = useQuery(GET_USER_FRIENDS_IDS, {
    variables: { id: userId },
  });
  return { friendsIdsData, friendsIdsLoading };
}

export function useUserFriends(friendsIdsLoading: boolean, friendsIdsData: any) {
  const [GET_USER_FRIENDS, { data: friends, loading: friendsLoading }] =
    useLazyQuery(GET_USER_FRIEND);

  useEffect(() => {
    if (
      !friendsIdsLoading &&
      friendsIdsData &&
      friendsIdsData.users &&
      friendsIdsData.users.length > 0
    ) {
      const ids = friendsIdsData.users[0].friends;

      GET_USER_FRIENDS({
        variables: { ids: ids },
      });
    }
  }, [friendsIdsData, friendsIdsLoading]);

  return { friends, friendsLoading };
}
