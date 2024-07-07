import { getUserId } from "@shared/lib";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  likes: string[];
  setPostIsLiked: Dispatch<SetStateAction<boolean>>;
}

export function usePostLiked({ likes, setPostIsLiked }: Props) {
  const userId = getUserId();

  useEffect(() => {
    const check = likes.some((like) => like === userId);

    if (check) {
      setPostIsLiked(true);
    } else {
      setPostIsLiked(false);
    }
  }, [likes, userId]);
}
