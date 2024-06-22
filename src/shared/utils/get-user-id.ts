import Cookies from "js-cookie";

export const getUserId = () => {
  const userId = Cookies.get("userId");

  return userId;
};
