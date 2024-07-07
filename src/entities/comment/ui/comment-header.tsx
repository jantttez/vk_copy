import { extractDateFromTimestamp } from '@shared/lib';
import { CommentModel } from '..';

interface Props {
  comment: CommentModel;
  toggleMenu: () => void;
}

export const CommentHeader = ({ comment, toggleMenu }: Props) => {
  const createdAt = extractDateFromTimestamp(Number(comment.createdAt));

  return (
    <div className='flex justify-between mb-2 items-center'>
      <div className='flex'>
        <img src={comment.authorPhoto} alt='User Avatar' className='w-10 h-10 rounded-full overflow-hidden ,r-3' />
        <div className='flex flex-col ml-2'>
          <span className='text-xs font-bold text-comment-text'>{comment.authorName}</span>
          <span className='text-post-gray text-xs'>{createdAt}</span>
        </div>
      </div>

      <button className='relative bg-none border-none cursor-pointer ' onClick={toggleMenu}>
        ...
      </button>
    </div>
  );
};
