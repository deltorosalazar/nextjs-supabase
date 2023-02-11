import Link from "next/link";
import { useForm } from "react-hook-form"

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" {...register('email', { required: '' })} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" {...register('password', { required: '' })} />
        <label htmlFor="repeat-password">Repeat Password</label>
        <input id="repeat-password" name="repeat-password" type="password" {...register('repeat-password', { required: '' })} />
        <button type="submit">Register</button>
      </form>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Register;
