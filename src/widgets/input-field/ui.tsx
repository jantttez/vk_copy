import styles from './ui.module.scss';

import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { Input, Spinner } from '@chakra-ui/react';

import { useClickOutside } from '@shared/hooks';
import { useUserStore } from '@entities/user';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_POST, GET_POSTS, GET_USER_POSTS } from '@shared/api';
import { getNewUUID } from '@shared/lib';
import { api, model, PostAddBtn } from '@features/post/post-add';

interface Props {
  inputFieldRef: MutableRefObject<HTMLFormElement | null>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export interface FormState {
  imageUrl: string;
  inputText: string;
}

export function InputField({ inputFieldRef, isActive, setIsActive }: Props) {
  useClickOutside<HTMLFormElement>({ ref: inputFieldRef, setState: setIsActive });

  const currentUser = useUserStore((state) => state.user);

  const fieldActiveHandler = () => {
    setIsActive(!isActive);
  };

  const { register, handleSubmit, reset } = model.usePostForm();

  const { addPost, loading, error } = api.useAddPost();

  const onSubmit: SubmitHandler<FormState> = (data) => {
    if (!currentUser) return null;
    api.addPost(addPost, data, currentUser.userPhoto, currentUser.id, currentUser.name);
    reset();
  };

  if (loading) return <Spinner />;
  if (error) return `Submission error! ${error.message}`;
  if (!currentUser) return null;
  return (
    <form
      className={styles.InputField}
      ref={inputFieldRef}
      onClick={fieldActiveHandler}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputContainer}>
        <img src={currentUser.userPhoto} alt='avatar' className={styles.inputImage} />
        {isActive ? (
          <Input placeholder='Url изображения...' variant='unstyled' {...register('imageUrl')} />
        ) : (
          <Input placeholder='Что у вас нового?' variant='unstyled' />
        )}
        <PostAddBtn />
      </div>
      {isActive && (
        <>
          <hr />
          <div className={styles.popoverContent} onClick={(e) => e.stopPropagation()}>
            <textarea
              className={styles.inputTextArea}
              placeholder='Что у вас нового?'
              {...register('inputText', {
                required: 'this field is required',
              })}
            ></textarea>
          </div>
        </>
      )}
    </form>
  );
}
