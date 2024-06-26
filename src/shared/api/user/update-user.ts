import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $name: String!
    $userName: String!
    $imageUrl: String
    $status: String
    $email: String
    $password: String
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        userName: $userName
        userPhoto: $imageUrl
        status: $status
        email: $email
        password: $password
      }
    ) {
      affected_rows
    }
  }
`;
