import { User } from '@entities/user';
import { UserHeader as Header, UserHeaderBtnGroup } from '@entities/user/user-header';
import { EditProfile } from '@features/user';

interface Props {
  user: User;
}

export const UserHeader = ({ user }: Props) => {
  return (
    <Header
      user={user}
      UserHeaderBtnGroup={() => (
        <UserHeaderBtnGroup renderEditButton={() => <EditProfile userId={user.id} />} headerUserId={user.id} />
      )}
    />
  );
};
