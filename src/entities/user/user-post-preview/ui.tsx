import { Post } from '@entities/post';
import { extractDateFromTimestamp } from '@shared/lib';

interface Props {
  post: Post;
}

export function UserPostPreview({ post }: Props) {
  const createdAt = extractDateFromTimestamp(Number(post.createdAt));

  return (
    <>
      <div className='flex items-center'>
        <img src={post.authorPhoto} alt='User Avatar' className='w-10 h-10 rounded-full mr-3' />
        <div className='flex flex-col'>
          <span className='font-bold'>{post.authorName}</span>
          <span className='text-sm text-post-gray'>{createdAt}</span>
        </div>
      </div>
    </>
  );
}
