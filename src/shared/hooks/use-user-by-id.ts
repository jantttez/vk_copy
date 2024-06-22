import { userService } from "@shared/services";
import { useQuery } from "@tanstack/react-query";

interface Props {
  userId: string;
  isEnabled: boolean;
}

export function useUserById({ userId, isEnabled }: Props) {
  const { data: user, isFetching } = useQuery({
    queryKey: ["fetchUserById"],
    queryFn: () => userService.getUserById(userId),
    enabled: isEnabled,
  });

  return { user, isFetching };
}
