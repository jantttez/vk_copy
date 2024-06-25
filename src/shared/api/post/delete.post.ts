import { gql } from "@apollo/client";

export const DELETE_POST_BY_ID = gql`
  mutation DELETE_POST($id: String!) {
    delete_posts_by_pk(id: $id) {
      id
    }
  }
`;
