import { useUserById } from "@shared/hooks";
import { getUserId } from "@shared/utils";
import { useThemeStore } from "@store/use-theme-store";
import { useUserStore } from "@store/use-user-store";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

export function pageMiddleware() {
  const userId = getUserId();
  const navigator = useNavigate();

  if (!userId) {
    navigator("/login");
  }

  const { addUserIdToStore, addUserToStore } = useUserStore(useShallow((state) => state));
  const setTheme = useThemeStore((state) => state.setTheme);

  const { user } = useUserById({ userId: userId, isEnabled: true });

  if (user) {
    addUserIdToStore(userId);
    addUserToStore(user);
    setTheme(user.userTheme);
  }
}
