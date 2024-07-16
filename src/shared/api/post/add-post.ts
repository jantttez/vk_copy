import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation addPost($objects: [posts_insert_input!]!) {
    insert_posts(objects: $objects) {
      affected_rows
    }
  }
`;
