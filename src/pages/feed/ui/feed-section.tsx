import { FilterField, InputField } from '@components/index';
import { useRef, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { PostList } from '@widgets/post-list';
import { useFeedPosts } from '@pages/feed/api';

export function FeedSection() {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const { data, loading, error } = useFeedPosts();

  return (
    <div className='flex w-full'>
      <section className='w-2/3'>
        <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
        {loading ? <Spinner /> : error ? <div>Error {error.message}</div> : null}
        {data && <PostList posts={data['posts']} />}
      </section>
      <div className='ml-5 w-1/3'>
        <FilterField />
      </div>
    </div>
  );
}
