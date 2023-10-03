import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./style.module.css";

interface IStarRating {
  rating: number;
}

const StarRating = ({ rating }: IStarRating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={styles.star}>
          {index < fullStars ? <FaStar /> : index === fullStars && hasHalfStar ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
      ))}
      ({rating}/5)
    </div>
  );
};

export default StarRating;
