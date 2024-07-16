import { gql } from '@apollo/client';

export const USER_POSTS_UPDATE = gql`
  mutation userPostUpdate($id: String!, $authorName: String!, $authorPhoto: String!) {
    update_posts(
      where: { authorId: { _eq: $id } }
      _set: { authorName: $authorName, authorPhoto: $authorPhoto }
    ) {
      affected_rows
    }
  }
`;
