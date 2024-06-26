import { useNavigate } from "react-router-dom";

export function useUserNavigate(userId: string) {
  const navigate = useNavigate();

  return () => {
    navigate(`/${userId}`);
  };
}
