import { Input } from '@chakra-ui/react';

interface Props {
  register: any;
  renderAddComment: () => JSX.Element;
}

export const Form = ({ register, renderAddComment }: Props) => {
  return (
    <div className='flex text-center items-center p-1 rounded-xl border border-solid border-comment-border'>
      <Input
        placeholder='что вы думаете по этому поводу?'
        variant='unstyled'
        required
        {...register('commentContent', {
          required: 'comment field is required',
          maxLength: {
            value: 150,
            message: 'comment filed must be shorted than 150 characters',
          },
          minLength: {
            value: 4,
            message: ' comment field must be longer than 4 characters',
          },
        })}
      />
      {renderAddComment()}
    </div>
  );
};
