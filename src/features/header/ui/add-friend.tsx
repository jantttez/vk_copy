import { UserRoundPlus } from 'lucide-react';
import * as api from '../api';
import { Spinner } from '@chakra-ui/react';

interface Props {
  currentUserId: string;
  newCurrentUserIds: string[];
  newPersonUserids: string[];
  personaId: string;
}
export const AddFriend = ({
  currentUserId,
  newCurrentUserIds,
  newPersonUserids,
  personaId,
}: Props) => {
  const { ADD_FRIEND, error, loading } = api.useAddFriend(
    currentUserId,
    newCurrentUserIds,
    newPersonUserids,
    personaId
  );
  const handler = () => {
    ADD_FRIEND();
  };

  if (loading) return <Spinner />;
  if (error) return <div>error: {error.message}</div>;
  return (
    <button
      className='text-white w-1/12 h-1/12 p-1 rounded-full py-1 py-2 cursor-pointer text-xs hover:bg-hover-bg-color '
      onClick={handler}
    >
      <UserRoundPlus size={20} />
    </button>
  );
};
