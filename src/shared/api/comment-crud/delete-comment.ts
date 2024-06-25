import { gql } from "@apollo/client";

export const DELETE_COMMENT_BY_ID = gql`
  mutation DELETE_COMMENT($id: String!) {
    delete_comments_by_pk(id: $id) {
      id
    }
  }
`;
