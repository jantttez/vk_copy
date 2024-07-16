import { gql } from '@apollo/client';

export const GET_USER_FRIENDS_IDS = gql`
  query GET_USER_FRIENDS_IDS($id: String!) {
    users(where: { id: { _eq: $id } }) {
      friends
    }
  }
`;
