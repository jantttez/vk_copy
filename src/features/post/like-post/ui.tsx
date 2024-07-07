import { Spinner } from "@chakra-ui/react";
import { Button } from "@shared/ui";
import { Heart } from "lucide-react";
import { useUpdatePostLikes } from "./api";
import { LikePost } from "./model";

interface Props {
  postIsLiked: boolean;
  postLikes: string[];
  postId: string;
}

export function Btn({ postIsLiked, postId, postLikes }: Props) {
  const { updatePostLikes, error, loading } = useUpdatePostLikes();

  const likesHandler = () => {
    LikePost({ postId: postId, postIsLiked: postIsLiked, postLikes: postLikes, updatePostLikes: updatePostLikes });
  };

  if (error) return <div>likes error: {error.message}</div>;
  return (
    <div>
      {loading ? (
        <Spinner className="items-center justify-center m-2" />
      ) : (
        <Button className="flex items-center bg-none border-none text-post-gray mr-4" onClick={likesHandler}>
          <Heart style={postIsLiked ? { color: "red" } : { color: "gray" }} />
          <span>Like</span>
        </Button>
      )}
    </div>
  );
}
