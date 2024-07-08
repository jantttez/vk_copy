import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { model } from '@entities/edit';
import { GET_USER_POSTS, USER_POSTS_UPDATE } from '@shared/api';

export function useUserPostUpdate() {
  const [userPostUpdate, { loading, error }] = useMutation(USER_POSTS_UPDATE);

  return { userPostUpdate, loading, error };
}

export function userPostUpdate(
  userPostUpdate: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  useId: string,
  data: model.EditForm
) {
  userPostUpdate({
    variables: { id: useId, authorName: data.name, authorPhoto: data.imageURL },
    refetchQueries: [
      {
        query: GET_USER_POSTS,
        variables: { id: useId },
      },
    ],
  });
}
