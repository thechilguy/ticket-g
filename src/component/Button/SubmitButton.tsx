import styles from "./SubmitButton.module.scss";

interface SubmitButtonProps {
  text: string;
}

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button type="submit" className={styles.btn}>
      {text}
    </button>
  );
}
