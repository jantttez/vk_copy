import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "@shared/api";
import { routes } from "@shared/constant";
import { getUserId } from "@shared/lib";
import { useUserStore } from "@shared/lib/storage";
import { User } from "@shared/types";
import { useNavigate, useParams } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

export function UserPageMiddleware() {
  const { userId } = useParams();
  const id = getUserId();
  const navigator = useNavigate();

  if (!userId) {
    navigator(routes.signIn);
  } else {
    const { addUserIdToStore, addUserToStore, addOtherToStore } = useUserStore(useShallow((state) => state));

    const { data, loading } = useQuery(GET_USER_BY_ID, {
      variables: { id: userId },
    });

    if (data) {
      addUserIdToStore(userId);
      if (data["users_by_pk"].id !== id) {
        addOtherToStore(data["users_by_pk"]);
      } else if (data["users_by_pk"].id === id) {
        addUserToStore(data["users_by_pk"]);
      }
    }

    const user: User = data ? data["users_by_pk"] : null;

    return { loading, user };
  }
}
