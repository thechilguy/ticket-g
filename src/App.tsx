import styles from "./App.module.scss";
import circle from "./assets/image/pattern-circle.svg";
import Ticket from "./Ticket";
import logo from "../src/assets/image/logo-full.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.hero}>
        <div className={styles.line}></div>
        <div className={styles.curve}> </div>
        <div className={styles.smallCurve}></div>
        <img className={styles.circle} src={circle} alt="circle" />
        <img className={styles.circle} src={circle} alt="circle" />
      </div>

      <div className={styles.content}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/ticket" element={<Ticket />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
