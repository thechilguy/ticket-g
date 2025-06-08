import { useFormContext } from "react-hook-form";
import styles from "./NameInput.module.scss";

export default function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          className={styles.input}
        />
        {errors.name && (
          <p className={styles.error}>{errors.name.message as string}</p>
        )}
      </div>
    </div>
  );
}
