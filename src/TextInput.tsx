import { useFormContext } from "react-hook-form";

import styles from "./TextInput.module.scss";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export default function TextInput({
  name,
  label,
  placeholder = "",
  type = "text",
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={styles.input}
        />
        {error && <p className={styles.error}>{error.message as string}</p>}
      </div>
    </div>
  );
}
