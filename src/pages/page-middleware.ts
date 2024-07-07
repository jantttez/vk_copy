import { getUserId } from "@shared/lib/utils";
import { useUserStore } from "@entities/user";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { routes } from "@shared/constant";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "@shared/api";
import { User } from "@entities/user";

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
    let user = {};

    if (data) {
      addUserIdToStore(id);
      addUserToStore(data["users_by_pk"]);
      user = data["users_by_pk"] as User;
    }

    return { loading, user };
  }
}
