import { model } from '@entities/edit';
import { useForm } from 'react-hook-form';

export function useEditFormModel() {
  const { register, reset, handleSubmit, formState } = useForm<model.EditForm>({
    mode: 'onChange',
  });

  return { register, reset, handleSubmit, formState };
}
