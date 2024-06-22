import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";

interface ILoginForm {
  email: string;
  password: string;
}

export function LoginPage() {
  const { register, handleSubmit, formState } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const loginUser = (data: ILoginForm) => {
    const auth = getAuth();
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((fullResponse) => {
        const userData = fullResponse.user;

        const accessToken = userData.refreshToken;
        const userId = userData.uid;

        Cookies.set("access-token", accessToken);
        Cookies.set("userId", userId);
      })
      .catch((e: Error) => console.error(e));
  };

  const inSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser(data);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit(inSubmit)} className={styles.loginForm}>
        <h2>Login</h2>
        <label htmlFor="email">{formState.errors.email?.message}</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
          })}
        />
        <label htmlFor="password">{formState.errors.password?.message}</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
          })}
        />
        <button type="submit">Log In</button>
        <p>
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
        <p>
          Похуй? <Link to="/">Back</Link>
        </p>
      </form>
    </div>
  );
}
