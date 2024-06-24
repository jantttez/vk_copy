import { gql } from "@apollo/client";

export const GET_POPUP_PEOPLE = gql`
  query GET_POPOVER_PEOPLE {
    users(limit: 3) {
      id
      name
      userPhoto
      friends
    }
  }
`;
