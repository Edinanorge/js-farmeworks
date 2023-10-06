import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ClockLoader } from "react-spinners";
import CartItem from "../../components/CartItem";
import styles from "./style.module.css";
import { useApi } from "../../hooks/useApi";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function Checkout() {
  const { cartItems, removeAllFromCart } = useShoppingCart();
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");
  const products = data as IProduct[];

  if (isLoading) {
    return (
      <main>
        <div className="spinner">
          <ClockLoader color={"#00c46a"} />
        </div>
      </main>
    );
  }

  if (isError) {
    return <main>Error loading data...</main>;
  }

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      return total + (item?.discountedPrice || 0) * cartItem.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  return (
    <main>
      <h1>Shopping Cart</h1>
      <section className={styles.shopingCartContainer}>
        {cartItems.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty.</h2>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className={styles.totalDetails}>
          <h2>Order Summary:</h2>
          <div>Subtotal: {getTotalPrice()} kr </div>
          <div>Shipping: 0 kr</div>
          <h3>
            Total price:<span className={styles.price}>{getTotalPrice()} kr</span>{" "}
          </h3>
          <Link to="/checkout/success">
            <button className={styles.btnCheckout} onClick={() => removeAllFromCart()}>
              Checkout
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Checkout;
