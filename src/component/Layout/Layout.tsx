import styles from "./Layou.module.scss";
import circle from "../../assets/image/pattern-circle.svg";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.app}>
      <div className={styles.hero}>
        <div className={styles.line}></div>
        <div className={styles.curve}></div>
        <div className={styles.smallCurve}></div>
        <img className={styles.circle} src={circle} alt="circle" />
        <img className={styles.circle} src={circle} alt="circle" />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
