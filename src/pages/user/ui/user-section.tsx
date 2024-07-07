import { useEffect, useRef, useState } from 'react';

import { FilterField } from '@components/index';
import { InputField } from '@components/index';

import { getUserId } from '@shared/lib/utils';
import { Spinner } from '@chakra-ui/react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER_FRIENDS_IDS, GET_USER_POSTS, GET_USER_FRIEND } from '@shared/api';
import { User } from '@entities/user';
import { PostList } from '@widgets/post-list';
import { UserHeader } from '@widgets/user-header';
import { Friend, Friends, FriendsHeader, FriendsItem } from '@entities/friend';
import { useUserFriends, useUserFriendsdIds, useUserPosts } from '../api';

interface Props {
  currentUser: User;
}

export function MainUserSection({ currentUser }: Props) {
  const inputFieldRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const userId = getUserId();

  const { data, loading } = useUserPosts(currentUser.id);

  const { friendsIdsData, friendsIdsLoading } = useUserFriendsdIds(currentUser.id);

  const { friends, friendsLoading } = useUserFriends(friendsIdsLoading, friendsIdsData);

  //подумать на счет нужно ли выносить секции с двумя тернарниками вне jsxa
  return (
    <div className='w-full min-h-full max-h-fit box-border'>
      {currentUser ? <UserHeader user={currentUser} /> : <Spinner />}
      <section className='flex flex-wrap w-full items-center my-5 mx-auto'>
        <div className='flex flex-col w-3/5 mb-5'>
          <div className='w-full mb-5'>
            {userId !== currentUser.id ? null : (
              <InputField inputFieldRef={inputFieldRef} isActive={isActive} setIsActive={setIsActive} />
            )}
            <FilterField />
          </div>
          {loading ? (
            <Spinner justifySelf={'center'} alignSelf={'center'} />
          ) : (
            <div className='w-full'>{data ? <PostList posts={data.posts} /> : null}</div>
          )}
        </div>
        <div className='w-2/5'>
          {friendsLoading ? (
            <Spinner />
          ) : friends && friends.users ? (
            <Friends
              renderFriendsHeader={() => <FriendsHeader title='Друзья' length={friends.users.length} />}
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
