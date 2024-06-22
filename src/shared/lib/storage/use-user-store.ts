import { create } from "zustand";
import { User } from "@shared/types";

interface UserStoreState {
  userId: string | null;
  user: User | null;
}

interface UserStoreAction {
  addUserToStore: (newUser: User) => void;
  addUserIdToStore: (userId: string) => void;
  removeUserFromStore: () => void;
  updateUserForStore: (UpdatedUser: User) => void;
}

export const useUserStore = create<UserStoreState & UserStoreAction>((set) => ({
  userId: null,
  user: null,
  addUserToStore: (newUser: User) => set(() => ({ user: newUser })),
  addUserIdToStore: (userId: string) => set(() => ({ userId: userId })),
  removeUserFromStore: () => set(() => ({ user: null })),
  updateUserForStore: (UpdatedUser: User) => set(() => ({ user: UpdatedUser })),
}));
