import { UserHeaderButton } from '@entities/user';
import { Trash } from 'lucide-react';
import * as api from '../api';
import { Spinner } from '@chakra-ui/react';

interface Props {
  currentUserId: string;
  personaId: string;
  newCurrentUserIds: string[];
  newPersonUserids: string[];
  newCurrentUserDeleteIds: string[];
  newPersonUserDeleteIds: string[];
}
export const DeleteFriend = ({
  currentUserId,
  newCurrentUserDeleteIds,
  newCurrentUserIds,
  newPersonUserDeleteIds,
  newPersonUserids,
  personaId,
}: Props) => {
  const { ADD_FRIEND, loading, error } = api.useAddFriend(
    currentUserId,
    newCurrentUserIds,
    newPersonUserids,
    personaId
  );

  const handler = () => {
    api.deleteFriendHandler(ADD_FRIEND, currentUserId, newCurrentUserDeleteIds, personaId, newPersonUserDeleteIds);
  };

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;
  return (
    <div aria-label='delete' onClick={handler}>
      <UserHeaderButton Icon={Trash} size={20} />
    </div>
  );
};
