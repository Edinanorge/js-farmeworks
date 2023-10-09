import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ClockLoader } from "react-spinners";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaMinus, FaRegTrashAlt, FaPlus } from "react-icons/fa";

interface ICartItem {
  id: number;
  quantity: number;
}

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function CartItem({ id }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  useEffect(() => {
    const url = `https://api.noroff.dev/api/v1/online-shop/${id} `;
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return (
      <main>
        <div className="spinner">
          <ClockLoader color={"#00c46a"} />
        </div>
      </main>
    );
  }

  if (isError || !product) {
    return <main>Error loading data..</main>;
  }
  return (
    <div className={styles.cartItem}>
      <img src={product.imageUrl} alt="product picture" />
      <div>
        <Link to={`/product/${id}`} className={styles.link}>
          <h2>{product.title}</h2>{" "}
        </Link>
        <p className={styles.code}>Code:{product.id}</p>
        <div>{product.discountedPrice} kr</div>
      </div>

      <div className={styles.quantity}>
        <button onClick={() => increaseCartQuantity(id)} className={styles.btnQuantity}>
          <FaPlus />
        </button>
        <div>{getItemQuantity(id)}</div>
        <button onClick={() => decreaseCartQuantity(id)} className={styles.btnQuantity}>
          <FaMinus />
        </button>
      </div>

      <button onClick={() => removeFromCart(id)} className={styles.btnRemove}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default CartItem;
