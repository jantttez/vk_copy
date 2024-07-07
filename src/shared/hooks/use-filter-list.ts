import { Post } from '@entities/post';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  posts: any;
  setFilteredPosts: Dispatch<SetStateAction<Post[]>>;
}

export function useFilterList({ posts, setFilteredPosts }: Props) {
  useEffect(() => {
    if (!posts) return;
    let filtered = [...posts['posts']];

    filtered = filtered.sort((a, b) => b.createdAt - a.createdAt);

    setFilteredPosts(filtered);
  }, [posts, setFilteredPosts]);
}
