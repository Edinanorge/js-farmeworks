import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.formContainer}>
        <h3>Join Our Newsletter</h3>
        <form action="">
          <input type="text" placeholder="Email*" required />
        </form>
      </div>
      <div className={styles.footerSecondary}>
        <div>
          <p>Haugteigveien 107, Ski</p>
          <p>OneStopShop@gmail.com</p>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>
        <div>
          <Link to="/">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Products</Link>
          <Link to="#"></Link>
        </div>
        <div>
          <Link to="/">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Products</Link>
          <Link to="#"></Link>
        </div>
      </div>
      <p className={styles.copyright}>copyright &copy; {currentDate} One-Stop Shop </p>
    </footer>
  );
}
export default Footer;
