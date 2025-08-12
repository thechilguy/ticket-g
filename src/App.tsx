import styles from "./App.module.scss";
import Ticket from "./Ticket";
import Layout from "./component/Layout/Layout";
import logo from "../src/assets/image/logo-full.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
