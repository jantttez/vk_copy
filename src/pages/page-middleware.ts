import { getUserId } from "@shared/lib/utils";
import { useUserStore } from "@shared/lib/storage/use-user-store";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { routes } from "@shared/constant";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "@shared/api";

export function pageMiddleware() {
  const id = getUserId();
  const navigator = useNavigate();

  if (!id) {
    navigator(routes.signIn);
  } else {
    const { addUserIdToStore, addUserToStore } = useUserStore(useShallow((state) => state));

    const { data, loading } = useQuery(GET_USER_BY_ID, {
      variables: { id: id },
    });

    if (data) {
      addUserIdToStore(id);
      addUserToStore(data["users_by_pk"]);
    }
    return loading;
  }
}
