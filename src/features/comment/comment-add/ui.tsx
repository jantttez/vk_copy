import { SendHorizontal } from 'lucide-react';
import * as api from './api';
import { Spinner } from '@chakra-ui/react';

interface Props {
  reset: any;
  loading: boolean;
  authorPhoto: string;
  postId: string;
  authorId: string;
  authorName: string;
  inputContent: string;
}
export const AddComment = ({
  reset,
  loading,
  authorPhoto,
  postId,
  authorId,
  authorName,
  inputContent,
}: Props) => {
  const { ADD_COMMENT, errorState, loadState } = api.useAddComment();

  const add = () => {
    api.addHandler(
      ADD_COMMENT,
      reset,
      loading,
      authorPhoto,
      postId,
      authorId,
      authorName,
      inputContent
    );
  };

  if (loadState) return <Spinner />;
  if (errorState) return <div>error: {errorState.message}</div>;
  return (
    <button className='m-1 p-1 rounded-xl bg-transparent hover:bg-header-btn' onClick={add}>
      <SendHorizontal />
    </button>
  );
};
