import styles from "./style.module.css";
import image from "../../assets/scroll.png";
import { scrollDown } from "../../utils/scroll";
import { useRef } from "react";

function Hero() {
  const scrollToSection = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.hero}>
      <h1>Your One-Stop Shop for Everything You Need - Explore Endless Possibilities!</h1>
      <p>
        Welcome to your one-stop shop for all your needs. From electronics to fashion, home essentials to unique gifts,
        we have got it all. Explore endless possibilities with our user-friendly store and start shopping today!
      </p>
      <div onClick={() => scrollDown(scrollToSection)}>
        <img src={image} alt="scroll icon" className={styles.scroll} />
      </div>
      <div ref={scrollToSection}></div>
    </div>
  );
}
export default Hero;
