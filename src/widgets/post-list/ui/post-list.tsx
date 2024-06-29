import styles from "./post-list.module.scss";

import { PostCard } from "@widgets/post";
import { useFilterList } from "@shared/hooks";
import { Post } from "@shared/types";
import { useState } from "react";
import { Box } from "@shared/ui";

interface Props {
  posts: Post[];
}

export function UI({ posts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useFilterList({ posts: posts, setFilteredPosts: setFilteredPosts });

  return (
    <Box className="flex flex-col items-center w-full">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}
