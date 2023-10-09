import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useShoppingCart } from "../../context/ShoppingCartContext";

import styles from "./style.module.css";
import image from "../../assets/logo.png";

function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={image} alt="logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/checkout">
              <FaShoppingCart />
              {cartQuantity !== 0 && <span className={styles.cartItemIndicator}>{cartQuantity}</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
