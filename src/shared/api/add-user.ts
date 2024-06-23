import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation InsertUser($objects: [users_data!]!) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }
`;
