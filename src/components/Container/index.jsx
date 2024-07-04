import styles from "./Container.module.css";

export default function index({ children }) {
  return <section className={styles.container}>{children}</section>;
}
