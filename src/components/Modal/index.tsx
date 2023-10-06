import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaCheck } from "react-icons/fa";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: [];
  tags: [];
}

function Modal({ product, closeModal }: { product: IProduct; closeModal: () => void }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <button className={styles.btnClose} onClick={() => closeModal()}>
          X
        </button>
        <div className={styles.success}>
          <FaCheck /> Product is successfully added to your cart!
        </div>
        <div className={styles.modalDescription}>
          <div className={styles.product}>
            <img src={product.imageUrl} />
            <div>
              {product.title} <p>Price: {product.price}</p>{" "}
            </div>
          </div>

          <div>
            <Link to="/" className={styles.modalBtn}>
              Continue Shopping
            </Link>
            <Link to="/checkout" className={styles.modalBtnCheckout}>
              Checkout Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
