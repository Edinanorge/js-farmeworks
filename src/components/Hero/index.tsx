import styles from "./style.module.css";
import scroll from "/scroll.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Your One-Stop Shop for Everything You Need - Explore Endless Possibilities!</h1>
      <p>
        Welcome to your one-stop shop for all your needs. From electronics to fashion, home essentials to unique gifts,
        we have got it all. Explore endless possibilities with our user-friendly store and start shopping today!
      </p>
      <div>
        <img src={scroll} alt="scroll icon" className={styles.scroll} />
      </div>
    </section>
  );
}
export default Hero;
