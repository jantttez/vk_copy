import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import { ADD_USER_FRIEND, GET_USER_BY_ID } from "@shared/api";

export function useAddFriend(userId: string) {
  const [ADD_FRIEND, { loading, error }] = useMutation(ADD_USER_FRIEND, {
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { id: userId },
      },
    ],
  });

  return { ADD_FRIEND, loading, error };
}

export const addFriendHandler = (
  ADD_FRIEND: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  currntUserId: string,
  newCurrentUserAddIds: string[],
  userId: string,
  newPersonUserAddIds: string[]
) => {
  ADD_FRIEND({
    variables: {
      idFirst: currntUserId,
      friendsIdsFirst: newCurrentUserAddIds,
      idSecond: userId,
      friendsIdsSecond: newPersonUserAddIds,
    },
  }).catch((error: Error) => console.error("Error adding friend:", error.message));
};

export const deleteFriendHandler = (
  ADD_FRIEND: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  currntUserId: string,
  newCurrentUserDeleteIds: string[],
  userId: string,
  newPersonUserDeleteIds: string[]
) => {
  ADD_FRIEND({
    variables: {
      idFirst: currntUserId,
      friendsIdsFirst: newCurrentUserDeleteIds,
      idSecond: userId,
      friendsIdsSecond: newPersonUserDeleteIds,
    },
  }).catch((error: Error) => console.error("Error adding friend:", error.message));
};
