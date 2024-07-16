import { useRef, useState } from 'react';

import { getUserId } from '@shared/lib/utils';
import { Spinner } from '@chakra-ui/react';
import { User } from '@entities/user';
import { UserHeader } from '@widgets/user-header';
import { Friend, Friends, FriendsHeader, FriendsItem } from '@entities/friend';
import { useUserFriends, useUserFriendsdIds, useUserPosts } from '../api';
import { InputField } from '@widgets/input-field';
import { Box } from '@shared/ui';
import { PostCard } from '@widgets/post';
import { Post as IPost } from '@entities/post';

interface Props {
  currentUser: User;
}

export function MainUserSection({ currentUser }: Props) {
  const inputFieldRef = useRef<HTMLFormElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const userId = getUserId();

  const { data, loading } = useUserPosts(currentUser.id);

  const { friendsIdsData, friendsIdsLoading } = useUserFriendsdIds(currentUser.id);

  const { friends, friendsLoading } = useUserFriends(friendsIdsLoading, friendsIdsData);

  return (
    <div className='w-full min-h-full max-h-fit box-border mt-0'>
      {currentUser ? <UserHeader user={currentUser} /> : <Spinner />}
      <section className='flex flex-wrap w-full items-start my-5 mx-auto h-full'>
        <div className='flex flex-col w-3/5 mb-5'>
          <div className='w-full mb-5'>
            {userId !== currentUser.id ? null : (
              <InputField
                inputFieldRef={inputFieldRef}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            )}
          </div>
          {loading ? (
            <Spinner justifySelf={'center'} alignSelf={'center'} />
          ) : (
            <div className='w-full'>
              {data ? (
                <Box className='flex flex-col items-center w-full'>
                  {data.posts.map((post: IPost) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </Box>
              ) : null}
            </div>
          )}
        </div>
        <div className='w-2/5 '>
          {friendsLoading ? (
            <Spinner />
          ) : friends ? (
            <Friends
              renderFriendsHeader={() => (
                <FriendsHeader title='Друзья' length={friends.users.length} />
              )}
              renderFriendsList={() => (
                <div className='flex items-center gap-5'>
                  {friends.users.slice(0, 3).map((friend: Friend) => (
                    <FriendsItem friend={friend} key={friend.id} />
                  ))}
                </div>
              )}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}
