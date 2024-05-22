import Image from "next/image";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="about" fill />
      </div>
    </div>
  );
};

export default AboutPage;
