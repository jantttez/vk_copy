import { gql } from "@apollo/client";

export const GET_USER_FRIEND = gql`
  query GET_USER_FRIENDS($ids: [String!]!) {
    users(where: { id: { _in: $ids } }) {
      id
      userPhoto
      name
    }
  }
`;
