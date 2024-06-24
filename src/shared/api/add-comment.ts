import { gql } from "@apollo/client";

export const ADD_POST_COMMENT = gql`
  mutation ADD_COMMENT($objects: [comments_insert_input!]!) {
    insert_comments(objects: $objects) {
      affected_rows
    }
  }
`;
