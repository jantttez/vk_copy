import { useAutoAuth } from "@shared/hooks";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/constant";

export function Redirect() {
  const navigate = useNavigate();

  const { authStatus } = useAutoAuth();

  useEffect(() => {
    if (authStatus) {
      navigate(routes.feed);
    } else {
      navigate(routes.signIn);
    }
  }, [authStatus]);

  return <div>redirect</div>;
}
