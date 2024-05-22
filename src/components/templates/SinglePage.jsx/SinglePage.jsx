import Image from "next/image";
import styles from "./SinglePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          src={"/Blog1.jpg"}
          alt="singlePost"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src={"/Blog1.jpg"}
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Author</span>
            <span className={styles.detailName}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailPublished}>Published</span>
            <span className={styles.detailDate}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          soluta temporibus enim, consequatur tempore ea optio ullam pariatur
          molestiae quidem quae aut in inventore voluptatum facilis maxime,
          quisquam hic delectus?
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
