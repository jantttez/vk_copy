import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { model } from '@entities/edit';
import { GET_USER_BY_ID, GET_USER_POSTS, UPDATE_USER, USER_POSTS_UPDATE } from '@shared/api';

export function useUpdateUser(useId: string) {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { id: useId },
      },
    ],
  });

  return { updateUser, loading, error };
}

export function UpdateUserHandler(
  updateUser: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  useId: string,
  data: model.EditForm,
  navigate: any
) {
  updateUser({
    variables: {
      id: useId,
      name: data.name,
      userName: data.userName,
      imageUrl: data.imageURL,
      status: data.status,
      email: data.email,
      password: data.password,
    },
  }).then(() => navigate(`/${useId}`));
}
