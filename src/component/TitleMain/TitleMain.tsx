import styles from "./TitleMain.module.scss";

function TitleMain() {
  return (
    <>
      <div className={styles.title}>
        <h1>Your Journey to Coding Conf</h1>
        <h2>2025 Starts Here!</h2>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>
    </>
  );
}

export default TitleMain;
