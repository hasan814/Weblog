import Image from "next/image";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum saepe
          doloribus nihil earum rerum ducimus tenetur est aut ex impedit?
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
