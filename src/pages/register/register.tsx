import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useToastError } from "@shared/hooks";
import { routes } from "@shared/constant";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "@shared/api";
import { Spinner } from "@chakra-ui/react";

interface IRegisterForm {
  PhotoUrl: string;
  userName: string;
  name: string;
  email: string;
  password: string;
}

export function RegisterPage() {
  const { register, handleSubmit, formState } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const navigator = useNavigate();
  useToastError({
    userNameError: formState.errors.userName?.message,
    nameError: formState.errors.name?.message,
    emailError: formState.errors.email?.message,
    passwordError: formState.errors.password?.message,
  });

  const [addUser, { error, loading }] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    const auth = getAuth();
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password).then((FullUserResponse) => {
      const userCredentials = FullUserResponse.user;
      const currentDate = Date.now();

      addUser({
        variables: {
          objects: [
            {
              id: userCredentials.uid,
              userPhoto: data.PhotoUrl,
              userName: data.userName,
              name: data.name,
              email: data.email,
              password: password,
              token: userCredentials.refreshToken,
              createdAt: currentDate,
              userTheme: "light",
              isPostView: "all",
              isProfileView: "all",
            },
          ],
        },
      })
        .then((e) => {
          navigator(routes.signIn);
        })
        .catch((error) => console.error(error));
    });
  };

  if (error) return <div>errorrs {error.message}</div>;
  if (loading) return <Spinner />;

  return (
    <div className={styles.RegisterContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.RegisterForm}>
        <h2>Register</h2>
        <input type="text" placeholder="PhotoUrl" {...register("PhotoUrl")} />
        <input
          type="text"
          placeholder="UserName"
          {...register("userName", {
            required: "UserName field is required",
          })}
        />
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name field is required",
          })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email field is required",
          })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password field is required",
            deps: ["email"],
          })}
        />
        <button type="submit">Register</button>
        <p>
          Do you have an account? <Link to={routes.signIn}>Sign In</Link>
        </p>
        <p>
          Похуй? <Link to={routes.home}>Back</Link>
        </p>
      </form>
    </div>
  );
}
