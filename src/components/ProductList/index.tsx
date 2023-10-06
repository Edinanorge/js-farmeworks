import { Link } from "react-router-dom";
import styles from "./style.module.css";
import StarRating from "../StarRating";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

interface IProductListProps {
  products: IProduct[];
}

function ProductList({ products }: IProductListProps) {
  const productItem = products.map((product) => {
    const { id, imageUrl, title, price, discountedPrice } = product;
    const discount = discountedPrice < price;
    const discountValue = (((price - discountedPrice) / price) * 100).toFixed(0);

    return (
      <div key={id} className={styles.product}>
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="product image" />
        </Link>
        <div className={styles.productBody}>
          <h2>{title}</h2>
          <StarRating rating={product.rating} />
          {discount ? (
            <div>
              <span className={styles.sale}>{discountedPrice} kr</span>
              <span className={styles.discountedPrice}>{price} kr</span>
              <div className={styles.discount}>{discountValue} %</div>
            </div>
          ) : (
            <div>
              <span className={styles.price}> {discountedPrice} kr</span>
            </div>
          )}

          <Link to={`/product/${id}`} className={styles.link}>
            View product
          </Link>
        </div>
      </div>
    );
  });
  return <section className={styles.container}>{productItem}</section>;
}

export default ProductList;
