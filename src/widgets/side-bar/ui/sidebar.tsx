import {
  AudioLines,
  BadgeHelp,
  Contact,
  CreditCard,
  MessageCircle,
  Newspaper,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@shared/constant';
import { getUserId } from '@shared/lib/utils';
import { Btn as SideBarItem } from './sidebar-item';

export function UI() {
  const navigate = useNavigate();
  const userId = getUserId();

  return (
    <div className='mr-1 bg-transparent text-white flex flex-col items-center w-[18%]'>
      <SideBarItem
        clickAction={() => navigate(`/${userId}`)}
        title='Моя страница'
        Icon={<User size={20} color='rgba(30,30,30, 1)' />}
      />
      <SideBarItem
        clickAction={() => navigate(routes.feed)}
        title='Новости'
        Icon={<Newspaper size={20} color='rgba(30,30,30, 1)' />}
      />
      <SideBarItem
        clickAction={() => navigate(routes.friends)}
        title='Друзья'
        Icon={<Contact size={20} color='rgba(30,30,30, 1)' />}
      />
      <SideBarItem
        clickAction={() => navigate(routes.music)}
        title='Музыка'
        Icon={<AudioLines size={20} color='rgba(30,30,30, 1)' />}
      />
      <SideBarItem
        clickAction={() => {}}
        title='Чат'
        Icon={<MessageCircle size={20} color='rgba(30,30,30, 1)' />}
      />
      <SideBarItem title='покупки' Icon={<CreditCard size={20} color='rgba(30,30,30, 1)' />} />
      <hr className='w-1/5 border-t border-solid border-neutral-800 my-3' />
      <SideBarItem title='Помощь' Icon={<BadgeHelp size={20} color='rgba(30,30,30, 1)' />} />
    </div>
  );
}
