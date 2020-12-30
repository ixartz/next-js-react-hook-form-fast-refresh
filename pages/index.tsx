import { useForm } from "react-hook-form";

export default function Home() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data: any) => console.dir(`Email input value: ${data.email}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register({ required: true })} />

      {errors.email && <span>This email is required</span>}

      <input type="submit" />
    </form>
  );
}
