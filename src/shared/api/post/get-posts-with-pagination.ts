import { gql } from '@apollo/client';

export const GET_POSTS_WITH_PAGINATION = gql`
  query get_posts_with_pagination($limit: Int!, $offset: Int!) {
    posts_aggregate(limit: $limit, offset: $offset, order_by: { createdAt: asc }) {
      nodes {
        id
        createdAt
        authorId
        authorPhoto
        authorName
        postContent
        postImage
        likes
      }
    }
  }
`;
