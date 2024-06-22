import { useAuthStore } from "@shared/lib/storage/index";
import Cookies from "js-cookie";

export function useAutoAuth() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const token = Cookies.get("access-token");
  const userId = Cookies.get("userId");
  let authStatus;
  if (!token) {
    authStatus = false;
  } else {
    setAuth(true);
    authStatus = true;
  }

  return { userId, authStatus };
}
