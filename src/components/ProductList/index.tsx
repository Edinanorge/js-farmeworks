import { Link } from "react-router-dom";
import styles from "./style.module.css";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
}

interface IProductListProps {
  products: IProduct[];
}

function ProductList({ products }: IProductListProps) {
  const productItem = products.map((product) => {
    const { id, imageUrl, title, description, price, discountedPrice } = product;
    const discount = discountedPrice <= price;
    const discountValue = (((price - discountedPrice) / price) * 100).toFixed(0);

    return (
      <div key={id} className={styles.product}>
        <img src={imageUrl} alt="product image" />
        <h2>{title}</h2>
        <p>{description}</p>
        {discount ? (
          <div>
            <span className={styles.discountedPrice}>kr {price} </span>
            <span className={styles.price}>kr {discountedPrice} </span>
            <div className={styles.discount}>{discountValue} %</div>
          </div>
        ) : (
          <div>
            <span className={styles.price}>kr {discountedPrice} </span>
          </div>
        )}

        <Link to={`/product/${id}`} className="cta">
          View product
        </Link>
      </div>
    );
  });
  return <section className={styles.container}>{productItem}</section>;
}

export default ProductList;
