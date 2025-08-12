import { useFormContext } from "react-hook-form";
import styles from "./EmailInput.module.scss";

export default function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message as string}</p>
        )}
      </div>
    </div>
  );
}
