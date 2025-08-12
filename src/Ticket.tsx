// Ticket.tsx
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Ticket.module.scss";
import logo from "../src/assets/image/logo-mark.svg";
import avatar from "./assets/image/image-avatar.jpg";
import git from "./assets/image/icon-github.svg";

function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state as {
    name: string;
    email: string;
    github: string;
    imageUrl: string;
  };

  if (!data) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div className={styles.ticket}>
        <div className={styles.title}>
          <h1>Congrats, {data.name}!</h1>
          <h1>Your ticket is ready.</h1>
        </div>
        <div className={styles.description}>
          <p>We've emailed your ticket to</p>
          <p>
            <span>{data.email}</span> and will send updates in{" "}
          </p>
          <p>the run up to the event.</p>
        </div>
        <div className={styles.ticketContainer}>
          <div>
            <div className={styles.logoContainer}>
              <div className={styles.logoText}>
                <img className={styles.logo} src={logo} alt="logo" />
                <p className={styles.headerText}>Coding Conf</p>
              </div>
              <div className={styles.date}>
                <p>Jan 31 , 2025 / Austin, TX</p>
              </div>
            </div>

            <div className={styles.avatarContainer}>
              <div>
                <img
                  className={styles.avatarImage}
                  src={data.imageUrl}
                  alt="avatar"
                />
              </div>
              <div className={styles.avatarText}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.github}>
                  <img src={git} alt="git" />
                  <p>{data.github}</p>
                </div>
              </div>
            </div>
            <div className={styles.ticketNumber}>
              <p>#01609</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
