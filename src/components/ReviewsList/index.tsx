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
  reviews: [];
}

interface IReview {
  id: string | number;
  username: string;
  rating: number;
  description: string;
}

function ReviewsList({ product }: { product: IProduct }) {
  return (
    <section>
      <ul className={styles.reviewContainer}>
        <h3>Reviews ({product.reviews.length}) :</h3>
        {product.reviews.map((review: IReview) => (
          <li key={review.id} className={styles.review}>
            <StarRating rating={review.rating} />
            <h4>{review.description}</h4>
            <p>- {review.username}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
