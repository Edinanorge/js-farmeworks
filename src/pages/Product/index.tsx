import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { FaStar, FaStarHalf } from "react-icons/fa";

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
interface IReview {
  id: string | number;
  username: string;
  rating: number;
  description: string;
}

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

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
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (isError || !product) {
    return <main>Error</main>;
  }

  return (
    <main>
      <ProductDetails product={product} />
      <ReviewsList product={product} />
    </main>
  );
}

function ProductDetails({ product }: { product: IProduct }) {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - fullStars >= 0.5;

  return (
    <section className={styles.singleProductContainer}>
      <img src={product.imageUrl} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={index} className={styles.star} />
          ))}
          {hasHalfStar && <FaStarHalf className={styles.star} />} ({product.rating})
        </div>
        <input type=""></input>
        <button className={styles.btnCta}>Add to Cart</button>
      </div>
    </section>
  );
}

function ReviewsList({ product }: { product: IProduct }) {
  return (
    <ul className={styles.reviewContainer}>
      <h3>Reviews:</h3>
      {product.reviews.map((review: IReview) => (
        <li key={review.id} className={styles.review}>
          <h4>{review.username}</h4>
          <p>
            <FaStar className={styles.star} /> ({review.rating})
          </p>
          <p>{review.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default Product;
