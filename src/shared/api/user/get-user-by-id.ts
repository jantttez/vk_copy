import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query GET_USER_BY_ID($id: String!) {
    users_by_pk(id: $id) {
      id
      createdAt
      userPhoto
      name
      friends
      userName
      status
      email
      password
      token
      isPostView
      isProfileView
    }
  }
`;
