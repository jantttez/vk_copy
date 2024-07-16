import { UserHeaderButton } from '@entities/user/user-header';
import { useNavigate } from 'react-router-dom';

interface Props {
  userId: string;
}

export const EditProfile = ({ userId }: Props) => {
  const naviagte = useNavigate();

  const editHandler = () => {
    naviagte(`/${userId}/edit`);
  };

  return <UserHeaderButton title='Edit' size={20} clickAction={editHandler} />;
};
