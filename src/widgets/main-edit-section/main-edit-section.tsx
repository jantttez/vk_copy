import { useUserStore } from "@shared/lib/storage";
import styles from "./main-edit-section.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Accessibility } from "lucide-react";
import { useEffect } from "react";
import { useToastError } from "@shared/hooks";
import { useMutation } from "@apollo/client";
import { GET_USER_BY_ID, UPDATE_USER } from "@shared/api";
import { getUserId } from "@shared/lib";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface EditForm {
  name: string;
  userName: string;
  imageURL: string;
  status: string;
  password?: string;
  email?: string;
}

export function MainEditSection() {
  const currentUser = useUserStore((state) => state.user);

  const useId = getUserId();

  const { register, reset, handleSubmit, formState } = useForm<EditForm>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        userName: currentUser.userName,
        imageURL: currentUser.userPhoto,
        status: currentUser.status,
        password: currentUser.password,
        email: currentUser.email,
      });
    }
  }, [currentUser]);

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { id: useId },
      },
    ],
  });

  const onSubmit: SubmitHandler<EditForm> = (data) => {
    updateUser({
      variables: {
        id: useId,
        name: data.name,
        userName: data.userName,
        imageUrl: data.imageURL,
        status: data.status,
        email: data.email,
        password: data.password,
      },
    }).then(() => navigate(`/${useId}`));
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
      {currentUser ? (
        <>
          <h1>Edit Profile</h1>
          <form className={styles.mainContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container_head}>
              <img src={currentUser.userPhoto} alt="User" className={styles.userImage} />
              <div className={styles.inputRow_head}>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.inputField}
                  {...register("name", {
                    required: "name field isrequired",
                  })}
                />
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.inputField}
                  {...register("userName", {
                    required: "userName field isrequired",
                  })}
                />
              </div>
            </div>
            <div className={styles.container}>
              <input type="text" placeholder="imageUrl" className={styles.inputField} {...register("imageURL")} />
            </div>
            <div className={styles.container}>
              <input type="text" placeholder="Status" className={styles.inputField} {...register("status")} />
            </div>
            <div className={styles.container}>
              <div className={styles.formGroup}>
                <div className={styles.inputRow}>
                  <input
                    type="text"
                    placeholder="Password"
                    className={styles.inputField}
                    {...register("password", {
                      minLength: {
                        value: 6,
                        message: "password field must be longer or equal then 6 character",
                      },
                    })}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.inputField}
                  {...register("email", {
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <button type="submit" className={styles.submitButton}>
                <h3>Submit</h3>
                <Accessibility size={20} />
              </button>
            )}
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
