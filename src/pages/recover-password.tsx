import Link from "next/link";
import { useForm } from "react-hook-form"

const RecoverPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({data})
  }

  return (
    <div>
      <h1>RecoverPassword</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" {...register('email', { required: '' })} />
        <button type="submit">Recover Password</button>
      </form>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default RecoverPassword;
