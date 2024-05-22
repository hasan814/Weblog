import Image from "next/image";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver, and, better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We&apos;re
          world&apos;s Our Special Team best consulting & finance solution
          provider. Wide range of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
