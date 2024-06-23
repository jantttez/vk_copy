import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GET_POSTS {
    posts {
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
