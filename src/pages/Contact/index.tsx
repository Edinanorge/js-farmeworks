import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import styles from "./style.module.css";
import image from "../../assets/address.png";

function Contact() {
  return (
    <main className={styles.container}>
      <section>
        <div className="formContainer">
          <form action="" className={styles.form}>
            <h1>Contact us</h1>
            <label>Full Name:</label>
            <input type="text" name="name" required></input>
            <label>Subject:</label>
            <input type="te<xt" name="subject" required></input>
            <label>Email:</label>
            <input type="email" name="email" required></input>
            <label>Message: </label>
            <textarea name="massage" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.addressContainer}>
          <p>
            <FaMapMarkerAlt />
            <span>Haugteigveien 107, Ski</span>
          </p>
          <p>
            <FaEnvelope />
            <span>OneStopShop@gmail.com</span>
          </p>
          <img src={image} alt="Map" />
        </div>
      </section>
    </main>
  );
}
export default Contact;
