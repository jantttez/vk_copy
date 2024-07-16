import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { ADD_POST_COMMENT, GET_POST_COMMENTS } from '@shared/api';
import { getNewUUID } from '@shared/lib';

export function useAddComment() {
  const [ADD_COMMENT, { loading: loadState, error: errorState }] = useMutation(ADD_POST_COMMENT, {
    refetchQueries: [GET_POST_COMMENTS, 'GET_POST_COMMENTS'],
  });

  return { ADD_COMMENT, loadState, errorState };
}

export const addHandler = (
  ADD_COMMENT: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined
  ) => Promise<FetchResult<any>>,
  reset: any,
  loading: boolean,
  authorPhoto: string,
  postId: string,
  authorId: string,
  authorName: string,
  inputContent: string
) => {
  const id = getNewUUID();
  ADD_COMMENT({
    variables: {
      objects: [
        {
          id: id,
          createdAt: Date.now(),
          authorPhoto: authorPhoto,
          postId: postId,
          authorId: authorId,
          authorName: authorName,
          content: inputContent,
        },
      ],
    },
  });
  if (!loading) {
    reset({
      commentContent: '',
    });
  }
};
