import { useForm } from 'react-hook-form';

export interface FormState {
  imageUrl: string;
  inputText: string;
}

export function usePostForm() {
  const { register, handleSubmit, reset } = useForm<FormState>({
    mode: 'onChange',
  });

  return { register, handleSubmit, reset };
}
