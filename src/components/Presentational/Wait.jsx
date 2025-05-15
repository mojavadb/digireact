import styles from "./Wait.module.css";

function Wait() {
  return (
    <div className={styles.wait}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Wait
