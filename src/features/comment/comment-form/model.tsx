import { useForm } from 'react-hook-form';

interface CommentForm {
  commentContent: string;
}

export function useCommentForm() {
  const { register, watch, reset } = useForm<CommentForm>({
    mode: 'onChange',
  });
  const inputContent = watch('commentContent');

  return { reset, register, inputContent };
}
