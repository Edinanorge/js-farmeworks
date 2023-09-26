import styles from "./style.module.css";
function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>copyright @ {currentDate} Logo</p>
    </footer>
  );
}
export default Footer;
