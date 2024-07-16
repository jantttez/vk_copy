import { gql } from '@apollo/client';

export const ADD_USER_FRIEND = gql`
  mutation ADD_FRIEND(
    $idFirst: String!
    $friendsIdsFirst: [String!]!
    $idSecond: String!
    $friendsIdsSecond: [String!]!
  ) {
    updateFirstUser: update_users(
      where: { id: { _eq: $idFirst } }
      _set: { friends: $friendsIdsFirst }
    ) {
      affected_rows
    }
    updateSecondUser: update_users(
      where: { id: { _eq: $idSecond } }
      _set: { friends: $friendsIdsSecond }
    ) {
      affected_rows
    }
  }
`;
