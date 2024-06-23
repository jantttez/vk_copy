import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }
`;
