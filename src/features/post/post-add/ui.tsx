import { SendHorizontal } from 'lucide-react';

export const PostAddBtn = ({}) => {
  return (
    <button className='m-1 p-1 rounded-xl bg-transparent hover:bg-hover-bg-color' type='submit'>
      <SendHorizontal />
    </button>
  );
};
