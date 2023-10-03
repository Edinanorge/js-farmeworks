import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import styles from "./style.module.css";

function CheckoutSuccess() {
  return (
    <main>
      <div>
        <h1>Thank you for your purchase!</h1>
        <div className={styles.details}>
          <FaCheck className={styles.icon} />
          <p>Youre order number is: 0082363</p>
          <p>We'll email you an order confirmation with details and tracking info.</p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default CheckoutSuccess;
