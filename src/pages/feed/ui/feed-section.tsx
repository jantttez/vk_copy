import { useRef, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useFeedPosts } from '@pages/feed/api';
import { InputField } from '@widgets/input-field';
import { Box } from '@shared/ui';
import { PostCard } from '@widgets/post';
import { useFilterList } from '@shared/hooks';
import { Post } from '@entities/post';

export function FeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const { data, loading, error } = useFeedPosts();

  useFilterList({ posts: data, setFilteredPosts: setFilteredPosts });

  if (loading) return <Spinner />;
  if (error) return <div>Error {error.message}</div>;
  return (
    <div className='flex w-full'>
      <section className='w-2/3'>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        <Box className='flex flex-col items-center w-full'>
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>
      </section>
    </div>
  );
}
