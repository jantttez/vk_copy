import { useMutation } from '@apollo/client';
import { ADD_USER_FRIEND, GET_USER_FRIENDS_IDS } from '@shared/api';

export function useAddFriend(
  currentUserId: string,
  newCurrentUserIds: string[],
  newPersonUserids: string[],
  personaId: string
) {
  const [ADD_FRIEND, { loading, error }] = useMutation(ADD_USER_FRIEND, {
    variables: {
      idFirst: currentUserId,
      friendsIdsFirst: newCurrentUserIds,
      idSecond: personaId,
      friendsIdsSecond: newPersonUserids,
    },
    refetchQueries: [
      {
        query: GET_USER_FRIENDS_IDS,
        variables: { id: currentUserId },
      },
    ],
  });
  return { ADD_FRIEND, loading, error };
}

export const deleteFriendHandler = (
  ADD_FRIEND: any,
  currentUserId: string,
  newCurrentUserDeleteIds: string[],
  personId: string,
  newPersonUserDeleteIds: string[]
) => {
  ADD_FRIEND({
    variables: {
      idFirst: currentUserId,
      friendsIdsFirst: newCurrentUserDeleteIds,
      idSecond: personId,
      friendsIdsSecond: newPersonUserDeleteIds,
    },
  }).catch((error: Error) => console.error('Error adding friend:', error));
};
