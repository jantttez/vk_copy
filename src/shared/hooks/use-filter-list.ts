import { Post } from '@entities/post';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  posts: Post[];
  setFilteredPosts: Dispatch<SetStateAction<Post[]>>;
}

export function useFilterList({ posts, setFilteredPosts }: Props) {
  useEffect(() => {
    let filtered = [...posts];

    filtered = filtered.sort((a, b) => b.createdAt - a.createdAt);

    setFilteredPosts(filtered);
  }, [posts]);
  return {};
}
