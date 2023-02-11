import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({data});
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" {...register('email', { required: '' })} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" {...register('password', { required: '' })} />
        <button type="submit">Login</button>
      </form>
      <Link href="/recover-password">Forgot your password?</Link>
    </div>
  );
};

export default Login;
