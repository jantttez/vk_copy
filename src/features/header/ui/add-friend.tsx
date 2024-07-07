import { UserRoundPlus } from 'lucide-react';

export const AddFriend = () => {
  return (
    <button
      className='text-white w-1/12 h-1/12 p-1 rounded-full py-1 py-2 cursor-pointer text-xs hover:bg-hover-bg-color '
      onClick={addHandler}
    >
      <UserRoundPlus size={20} />
    </button>
  );
};
