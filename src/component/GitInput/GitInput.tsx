import { useFormContext } from "react-hook-form";
import styles from "./GitInput.module.scss";

export default function GitInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor="github" className={styles.label}>
          GitHub Profile
        </label>
        <input
          id="github"
          type="string"
          placeholder="@yourusername"
          {...register("github")}
          className={styles.input}
        />
        {errors.github && (
          <p className={styles.error}>{errors.github.message as string}</p>
        )}
      </div>
    </div>
  );
}
