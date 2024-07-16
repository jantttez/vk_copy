import styles from './edit-form.module.scss';
import { SubmitHandler } from 'react-hook-form';
import { model } from '@entities/edit';

interface Props {
  handleSubmit: any;
  onSubmit: SubmitHandler<model.EditForm>;
  userPhoto: string;
  register: any;
  renderEditFormButton: () => JSX.Element;
}

export const EditForm = ({
  handleSubmit,
  onSubmit,
  userPhoto,
  register,
  renderEditFormButton,
}: Props) => {
  return (
    <form className={styles.mainContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container_head}>
        <img src={userPhoto} alt='User' className={styles.userImage} />
        <div className={styles.inputRow_head}>
          <input
            type='text'
            placeholder='Name'
            className={styles.inputField}
            {...register('name', {
              required: 'name field isrequired',
            })}
          />
          <input
            type='text'
            placeholder='Username'
            className={styles.inputField}
            {...register('userName', {
              required: 'userName field isrequired',
            })}
          />
        </div>
      </div>
      <div className={styles.container}>
        <input
          type='text'
          placeholder='imageUrl'
          className={styles.inputField}
          {...register('imageURL')}
        />
      </div>
      <div className={styles.container}>
        <input
          type='text'
          placeholder='Status'
          className={styles.inputField}
          {...register('status')}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.formGroup}>
          <div className={styles.inputRow}>
            <input
              type='text'
              placeholder='Password'
              className={styles.inputField}
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'password field must be longer or equal then 6 character',
                },
              })}
            />
          </div>
          <input
            type='email'
            placeholder='Email'
            className={styles.inputField}
            {...register('email', {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i,
                message: 'Please enter a valid email address',
              },
            })}
          />
        </div>

        {renderEditFormButton()}
      </div>
    </form>
  );
};
