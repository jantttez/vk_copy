import { gql } from "@apollo/client";

export const UPDATE_POST_LIKES = gql`
  mutation updatePostLikes($postId: String!, $likes: [String!]) {
    update_posts(where: { id: { _eq: $postId } }, _set: { likes: $likes }) {
      affected_rows
    }
  }
`;
