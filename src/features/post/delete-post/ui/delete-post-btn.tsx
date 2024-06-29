import { Box, Button } from "@shared/ui";
import { useDeletePost } from "../api";
import { Trash } from "lucide-react";
import { Spinner } from "@chakra-ui/react";

export function Btn({ postId }: { postId: string }) {
  const { DELETE_POST, error, loading } = useDeletePost({ postId: postId });

  const deleteHandler = () => {
    DELETE_POST();
  };

  if (error) return <Box>delete post error : {error.message}</Box>;

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          className="flex justify-between items-center p-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-bg-color"
          onClick={deleteHandler}
        >
          <Trash size={20} strokeWidth={1} className="mr-2" />
          <Button>Delete</Button>
        </Box>
      )}
    </Box>
  );
}
