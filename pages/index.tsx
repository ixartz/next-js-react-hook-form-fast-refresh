import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { handleSubmit, register, errors, formState } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.container}>
      Hello world!
      <form onSubmit={handleSubmit(onSubmit)}>
        {formState.isSubmitSuccessful && <div>it works successful</div>}
        {formState.submitCount && <div>submitCount {formState.submitCount}</div>}
        <input name="exampleRequired" ref={register({ required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
