import { useAutoAuth } from "@shared/hooks";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect() {
  const navigate = useNavigate();

  const { authStatus } = useAutoAuth();

  useEffect(() => {
    if (authStatus) {
      navigate("/feed");
    } else {
      navigate("/login");
    }
  }, [authStatus]);

  return <div>redirect</div>;
}
