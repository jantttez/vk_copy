import { gql } from "@apollo/client";

export const GET_USER_POSTS = gql`
  query GET_USER_POSTS($id: String!) {
    posts(where: { authorId: { _eq: $id } }) {
      id
      createdAt
      authorId
      authorPhoto
      authorName
      postContent
      postImage
      likes
    }
  }
`;
