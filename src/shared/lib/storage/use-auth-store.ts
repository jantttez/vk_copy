import { create } from "zustand";

interface AuthStoreState {
  isAuth: boolean;
}

interface AuthStoreAction {
  setAuth: (authState: boolean) => void;
}

export const useAuthStore = create<AuthStoreState & AuthStoreAction>((set) => ({
  isAuth: false,
  setAuth: (authState: boolean) => set(() => ({ isAuth: authState })),
}));
