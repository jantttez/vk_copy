import { Heart } from 'lucide-react';

interface Props {
  likes: string[];
  postImage: string;
}

export function PostModalContent({ likes, postImage }: Props) {
  return (
    <div className='flex'>
      <img src={postImage} alt='Post Image' className='rounded-xl' />
      <Heart />
      {likes.length}
    </div>
  );
}
