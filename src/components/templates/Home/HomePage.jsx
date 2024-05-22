import Image from "next/image";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create Thoughts Agency</h1>
        <p className={styles.desc}>
          Creating a digital agency named &quot;Thoughts Agency&quot; involves
          several steps, including defining the business model, establishing the
          brand identity, setting up the necessary infrastructure, and launching
          the business
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image fill src={"/brands.png"} alt="HomePage" />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image fill src={"/hero.gif"} alt="Hero" className={styles.img} />
      </div>
    </div>
  );
};

export default HomePage;
