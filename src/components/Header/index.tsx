import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Logo
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
