import { Spinner } from '@chakra-ui/react';
import { User } from '@entities/user';
import { Box, ModalWindow } from '@shared/ui';
import { CircleAlert } from 'lucide-react';
import styles from './user-header.module.scss';
import { useState } from 'react';

interface Props {
  user: User;
  UserHeaderBtnGroup: () => JSX.Element;
}

export const UserHeader = ({ user, UserHeaderBtnGroup }: Props) => {
  const [modalMoreIsActive, setModalMoreIsActive] = useState(false);
  const [imageMore, setImageMore] = useState(false);

  return (
    <Box className={styles.header}>
      <Box className='flex flex-row flex-wrap items-center'>
        <img
          src={user?.userPhoto}
          alt='User Avatar'
          className='w-[120px] h-[120px] rounded-full mr-5 cursor-pointer'
          onClick={() => setImageMore(true)}
        />
        <ModalWindow isActive={imageMore} setIsActive={setImageMore}>
          <img src={user?.userPhoto} alt='User Avatar' style={{ borderRadius: '10px' }} />
        </ModalWindow>

        <Box className='flex flex-col justify-start'>
          <h1 className='text-2xl font-bold m-0'>{user.name}</h1>
          <p className='text-base my-2'>{user.status}</p>
          <Box
            className='flex items-center text-sm text-gray-500 decoration-transparent transition-colors duration-300 cursor-pointer hover:decoration-slate-100'
            onClick={() => setModalMoreIsActive(true)}
          >
            <CircleAlert size={18} />
            Подробнее
          </Box>
          <ModalWindow isActive={modalMoreIsActive} setIsActive={setModalMoreIsActive}>
            <Spinner />
          </ModalWindow>
        </Box>
      </Box>
      {UserHeaderBtnGroup()}
    </Box>
  );
};
