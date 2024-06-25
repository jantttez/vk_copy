import { gql } from "@apollo/client";

export const GET_POST_COMMENTS = gql`
  query GET_POST_COMMENTS($postId: String!) {
    comments(where: { postId: { _eq: $postId } }) {
      id
      createdAt
      authorId
      authorPhoto
      postId
      authorName
      content
    }
  }
`;
