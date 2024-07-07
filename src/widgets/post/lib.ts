import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  likes: string[];
  setPostIsLiked: Dispatch<SetStateAction<boolean>>;
  userId: string;
}

export function usePostLiked({ likes, setPostIsLiked, userId }: Props) {
  useEffect(() => {
    const check = likes.some((like) => like === userId);

    if (check) {
      setPostIsLiked(true);
    } else {
      setPostIsLiked(false);
    }
  }, [likes, userId]);
}
