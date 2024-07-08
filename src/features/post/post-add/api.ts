import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { ADD_POST, GET_POSTS, GET_USER_POSTS } from '@shared/api';
import { getNewUUID } from '@shared/lib';
import { FormState } from './model';

export function useAddPost() {
  const [addPost, { loading, error }] = useMutation(ADD_POST, {
    refetchQueries: [
      {
        query: GET_POSTS,
        variables: {},
      },
      {
        query: GET_USER_POSTS,
        variables: {},
      },
    ],
  });

  return { addPost, loading, error };
}

export const addPost = (
  addPost: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<FetchResult<any>>,
  data: FormState,
  authorPhoto: string,
  authorid: string,
  authorName: string
) => {
  const id = getNewUUID();
  const date = Date.now();

  addPost({
    variables: {
      objects: [
        {
          id: id,
          authorId: authorid,
          authorPhoto: authorPhoto,
          createdAt: date,
          authorName: authorName,
          postImage: data.imageUrl,
          postContent: data.inputText,
          likes: [],
        },
      ],
    },
  }).catch((e) => console.error(e));
};
