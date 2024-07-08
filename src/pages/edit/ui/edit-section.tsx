import styles from './edit-section.module.scss';
import { SubmitHandler } from 'react-hook-form';
import { useToastError } from '@shared/hooks';
import { useUserStore } from '@entities/user';
import { getUserId } from '@shared/lib';
import { useNavigate } from 'react-router-dom';
import { model } from '@entities/edit';
import { useEditFormModel, api, EditForm, EditFormButton } from '@features/edit';
import { useUserPostUpdate, userPostUpdate as UPU } from '@features/post/post-update';

export function MainEditSection() {
  const currentUser = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const useId = getUserId();

  const { register, reset, handleSubmit, formState } = useEditFormModel();
  const { userPostUpdate } = useUserPostUpdate();

  model.useResetDefaultFormValue(reset, currentUser);

  const { error, loading, updateUser } = api.useUpdateUser(useId!);

  const onSubmit: SubmitHandler<model.EditForm> = (data) => {
    if (!useId) return null;

    api.UpdateUserHandler(updateUser, useId, data, navigate);
    UPU(userPostUpdate, useId, data);
  };

  useToastError({
    userNameError: formState.errors.userName?.message,
    nameError: formState.errors.name?.message,
    emailError: formState.errors.email?.message,
    passwordError: formState.errors.password?.message,
  });

  if (error) return <div>errors: {error.message}</div>;

  return (
    <div className={styles.bodyCon}>
      {currentUser && (
        <>
          <h1>Edit Profile</h1>
          <EditForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            userPhoto={currentUser.userPhoto}
            renderEditFormButton={() => <EditFormButton loading={loading} />}
          />
        </>
      )}
    </div>
  );
}
