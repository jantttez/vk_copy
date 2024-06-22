import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useToastError } from "@shared/hooks";
import { userService } from "@shared/services";
import { Theme, User, visibility } from "@shared/types";
import { getCurrentDate } from "@shared/utils";

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

  const RegisterUser = (data: IRegisterForm) => {
    const auth = getAuth();
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((FullUserResponse) => {
        const userCredentials = FullUserResponse.user;
        const user: User = {
          id: userCredentials.uid,
          userPhoto: data.PhotoUrl,
          userName: data.userName,
          name: data.name,
          email: data.email,
          status: "",
          password: password,
          token: userCredentials.refreshToken,
          createdAt: getCurrentDate(),
          updatedAt: getCurrentDate(),
          userTheme: Theme.light,
          isPostView: visibility.all,
        };

        userService.addUser(user);

        navigator("/Login");
      })
      .catch((e: Error) => console.error(e));
  };

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    RegisterUser(data);
  };

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
          Do you have an account? <Link to="/Login">Sign In</Link>
        </p>
        <p>
          Похуй? <Link to="/">Back</Link>
        </p>
      </form>
    </div>
  );
}
