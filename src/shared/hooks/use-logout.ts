import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigator = useNavigate();
  Cookies.remove("access-token");
  Cookies.remove("userId");

  navigator("/");
}
