import { create } from "zustand";
import { User } from "@shared/types";

interface UserStoreState {
  user: User | null;
}

interface UserStoreAction {
  addUserToStore: (newUser: User) => void;
  removeUserFromStore: () => void;
  updateUserForStore: (UpdatedUser: User) => void;
}

export const userUserStore = create<UserStoreState & UserStoreAction>((set) => ({
  user: null,
  addUserToStore: (newUser: User) => set(() => ({ user: newUser })),
  removeUserFromStore: () => set(() => ({ user: null })),
  updateUserForStore: (UpdatedUser: User) => set(() => ({ user: UpdatedUser })),
}));
