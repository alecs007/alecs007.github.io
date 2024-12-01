import styles from "./HeroStyles.module.css";
import profile1 from "../../assets/profile1.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import reddit from "../../assets/reddit.png";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div>
        <img src={profile1} className={styles.logo} alt="React logo" />
      </div>
      <div className={styles.info}>
        <h1>Alex Rotar </h1>
        <h2>&lt;web developer&gt;</h2>
      </div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/alexro_007/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://github.com/alecs007" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.facebook.com/alegzro007" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.reddit.com/user/Plastic_Memory593/"
          target="_blank"
        >
          <img src={reddit} alt="reddit" />
        </a>
      </div>
      <div className={styles.description}>
        <p>
          Focused on building interactive websites and writing clean, efficient
          code.
        </p>
      </div>
      <a href="assets/background2-XMdQVge_.jpg" download>
        <button className={styles.button}>Resume</button>
      </a>
    </section>
  );
}

export default Hero;
