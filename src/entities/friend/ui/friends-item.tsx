import { useRedirect } from '@shared/hooks';
import { Friend } from '@entities/friend';

interface Props {
  friend: Friend;
}

export const FriendsItem = ({ friend }: Props) => {
  const redirect = useRedirect();
  return (
    <div
      key={friend.id}
      className='flex p-2 w-full flex-col justify-center items-center rounded-xl cursor-pointer hover:bg-friend-hover'
    >
      <img
        src={friend.userPhoto}
        alt={friend.name}
        className='w-16 h-16 rounded-full object-cover'
        onClick={() => redirect(`/${friend.id}`)}
      />
      <h3>{friend.name}</h3>
    </div>
  );
};
