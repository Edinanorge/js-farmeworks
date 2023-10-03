import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useApi } from "../../hooks/useApi";
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
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const { data, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);

  const item = data as IProduct;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !item) {
    return <div>Error loading item details.</div>;
  }

  return (
    <div className={styles.cartItem}>
      <img src={item.imageUrl} alt="product picture" />
      <div>
        <h2>{item.title}</h2>
        <p className={styles.code}>code:{item.id}</p>
        <div>{item.discountedPrice} kr</div>
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
