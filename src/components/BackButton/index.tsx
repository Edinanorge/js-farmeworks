import { FaArrowLeft } from "react-icons/fa";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <section>
      <Link to="/" className={styles.button}>
        <FaArrowLeft />
        <span>Back to products</span>
      </Link>
    </section>
  );
}

export default BackButton;
