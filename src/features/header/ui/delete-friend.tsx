import { UserHeaderButton } from '@entities/user';

export const DeleteFriend = () => {
  return (
    <div aria-label='delete' onClick={deleteFriendHandler}>
      <UserHeaderButton Icon={Trash} size={20} />
    </div>
  );
};
