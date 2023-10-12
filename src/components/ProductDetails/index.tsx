import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import Modal from "../Modal";
import StarRating from "../StarRating";
import styles from "./style.module.css";

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

function ProductDetails({ product }: { product: IProduct }) {
  const [openModal, setOpenModal] = useState(false);
  const { increaseCartQuantity } = useShoppingCart();

  const handleClick = () => {
    increaseCartQuantity(product.id);
    setOpenModal(true);
  };

  return (
    <section className={styles.singleProductContainer}>
      <img src={product.imageUrl} alt={product.title} />
      <div className={styles.details}>
        <div>
          {product.tags.map((tag, index) => (
            <span className={styles.tag} key={index}>
              {tag}
            </span>
          ))}
        </div>
        <h2>{product.title}</h2>
        <StarRating rating={product.rating} />
        <p>{product.description}</p>
        <p>Price:</p>
        <p>
          {product.price > product.discountedPrice && (
            <span className={styles.discountedPrice}>{product.price} kr</span>
          )}
        </p>

        <h3>
          {product.discountedPrice} <span>kr</span>
        </h3>
        <button className={styles.btnCta} onClick={handleClick}>
          Add to Cart
        </button>
      </div>
      {openModal && <Modal product={product} closeModal={() => setOpenModal(false)} />}
    </section>
  );
}

export default ProductDetails;
