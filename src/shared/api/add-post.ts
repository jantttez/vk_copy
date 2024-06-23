import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation InsertPost($objects: [inputs!]!) {
    insert_posts(objects: $objects) {
      affected_rows
    }
  }
`;
