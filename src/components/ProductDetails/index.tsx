import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

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
}

function ProductDetails({ product }: { product: IProduct }) {
  const [message, setMessage] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const { increaseCartQuantity } = useShoppingCart();

  const handleClick = () => {
    setButtonClicked(true);
    increaseCartQuantity(product.id);
    setMessage("The product is added to your cart.");
  };

  return (
    <section className={styles.singleProductContainer}>
      <img src={product.imageUrl} alt={product.title} />
      <div className={styles.details}>
        <h2>{product.title}</h2>

        <StarRating rating={product.rating} />
        <p>{product.description}</p>
        <h3>
          {product.discountedPrice} <span>kr</span>
        </h3>
        {buttonClicked ? (
          <p className={styles.message}>{message}</p>
        ) : (
          <button className={styles.btnCta} onClick={handleClick}>
            Add to Cart
          </button>
        )}
      </div>
    </section>
  );
}

export default ProductDetails;
