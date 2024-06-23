import { postService } from "@shared/services";
import { useQuery } from "@tanstack/react-query";

export function useUserPostsWithPagination(limit: number, currentPage: number, userId: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchUserPostsPagination", userId, currentPage, limit],
    queryFn: () => postService.getUserPostsWithPagination(limit, currentPage, userId),
  });

  const userPosts = data?.data || [];
  const userPostsCount = data?.totalCount || 0;
  const isError = !!error;
  const isFetching = isLoading;

  return { userPosts, userPostsCount, isError, isFetching };
}
