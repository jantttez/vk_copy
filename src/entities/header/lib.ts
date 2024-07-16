import { Person } from './model';

export const getAddUserIds = (
  currnetUserFriendsIds: string[],
  person: Person,
  currentUserId: string
) => {
  const newCurrentUserIds = [...currnetUserFriendsIds, person.id];
  const newPersonUserids = [...person.friends, currentUserId];

  return { newCurrentUserIds, newPersonUserids };
};

export const getDeleteUserids = (
  currnetUserFriendsIds: string[],
  person: Person,
  currentUserId: string
) => {
  const newCurrentUserDeleteIds = currnetUserFriendsIds.filter((friend) => friend !== person.id);
  const newPersonUserDeleteIds = person.friends.filter((friend) => friend !== currentUserId);

  return { newPersonUserDeleteIds, newCurrentUserDeleteIds };
};
