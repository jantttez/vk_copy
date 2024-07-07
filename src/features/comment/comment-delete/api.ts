import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { DELETE_COMMENT_BY_ID, GET_POST_COMMENTS } from '@shared/api';

export function useDeleteCommentById(commentId: string) {
  const [DELETE_COMMENT, { loading, error }] = useMutation(DELETE_COMMENT_BY_ID, {
    variables: { id: commentId },
    refetchQueries: [GET_POST_COMMENTS, 'GET_POST_COMMENTS'],
  });
  return { DELETE_COMMENT, loading, error };
}

export const deleteHandler = (
  DELETE_COMMENT: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>
) => {
  DELETE_COMMENT();
};
