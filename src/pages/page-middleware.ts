import { useUserById } from "@shared/hooks";
import { getUserId } from "@shared/utils";
import { useThemeStore } from "@shared/lib/storage/use-theme-store";
import { useUserStore } from "@shared/lib/storage/use-user-store";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { routes } from "@shared/constant";

export function pageMiddleware() {
  const userId = getUserId();
  const navigator = useNavigate();

  if (!userId) {
    navigator(routes.signIn);
  } else {
    const { addUserIdToStore, addUserToStore } = useUserStore(useShallow((state) => state));
    const setTheme = useThemeStore((state) => state.setTheme);

    const { user } = useUserById({ userId: userId, isEnabled: true });

    if (user) {
      addUserIdToStore(userId);
      addUserToStore(user);
      setTheme(user.userTheme);
    }
  }
}
