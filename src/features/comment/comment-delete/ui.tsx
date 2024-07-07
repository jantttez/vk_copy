import { Spinner } from '@chakra-ui/react';
import * as api from './api';
import { Box } from '@shared/ui';

interface Props {
  commentId: string;
}
export const CommentDelete = ({ commentId }: Props) => {
  const { DELETE_COMMENT, error, loading } = api.useDeleteCommentById(commentId);

  if (loading) return <Spinner />;
  if (error) return <Box>error:{error.message}</Box>;
  return <button onClick={() => api.deleteHandler(DELETE_COMMENT)}>Удалить</button>;
};
