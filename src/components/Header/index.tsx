import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        One-Stop Shop
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
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
