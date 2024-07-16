import { User } from '@entities/user';

export const getAddNewIds = (currntUser: User, user: User) => {
  const newCurrentUserAddIds = [...currntUser.friends, user.id];
  const newPersonUserAddIds = [...user.friends, currntUser.id];
  return { newCurrentUserAddIds, newPersonUserAddIds };
};

export const getDeleteNewIds = (currntUser: User, user: User) => {
  const newCurrentUserDeleteIds = currntUser.friends.filter((friend: string) => friend !== user.id);

  const newPersonUserDeleteIds = user.friends.filter((friend) => friend !== currntUser.id);

  return { newCurrentUserDeleteIds, newPersonUserDeleteIds };
};
