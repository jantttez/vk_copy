import { create } from "zustand";
import { User } from "@shared/types";

interface UserStoreState {
  userId: string | null;
  user: User | null;
}

interface UserStoreAction {
  addUserToStore: (newUser: User) => Promise<void>;
  addUserIdToStore: (userId: string) => Promise<void>;
  removeUserFromStore: () => void;
  updateUserForStore: (UpdatedUser: User) => void;
}

export const useUserStore = create<UserStoreState & UserStoreAction>((set) => ({
  userId: null,
  user: null,
  addUserToStore: async (newUser: User) => set(() => ({ user: newUser })),
  addUserIdToStore: async (userId: string) => set(() => ({ userId: userId })),
  removeUserFromStore: () => set(() => ({ user: null })),
  updateUserForStore: (UpdatedUser: User) => set(() => ({ user: UpdatedUser })),
}));
