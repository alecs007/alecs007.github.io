import React from "react";
import styles from "./HeroStyles.module.css";
import profile1 from "../../assets/profile1.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import reddit from "../../assets/reddit.png";

function Hero({ text }) {
  return (
    <section id="hero">
      <div className={styles.whitespace}></div>
      <section className={styles.container}>
        <div>
          <img src={profile1} className={styles.logo} alt="Profile Picture" />
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
          <p>{text.subtitle}</p>
        </div>
        <a
          className={styles.resume}
          href="assets/background2-XMdQVge_.jpg"
          download
        >
          <button className={styles.btnresume}>
            {text.btntext} <i className="fas fa-cloud-download-alt"></i>
          </button>
        </a>
      </section>
    </section>
  );
}

export default Hero;
