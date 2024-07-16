import { useQuery } from '@chakra-ui/react';
import { GET_USER_FRIENDS } from '@shared/api';
import { useEffect } from 'react';

export function useUserFriends({ friendsIdsLoading, friendsIds }) {
  useEffect(() => {
    if (!friendsIdsLoading) {
      const { data, loading } = useQuery(GET_USER_FRIENDS, {
        variables: { ids: friendsIds },
      });

      if (!loading) {
        console.log(data['friends']);

        //setFriends(data["friends"]);
      }
    }
  }, [friendsIds]);

  return {};
}
