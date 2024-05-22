import Image from "next/image";
import styles from "./Cart.module.css";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image fill alt="Blog" className={styles.img} src={"/Blog1.jpg"} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          ab, repellendus quod enim adipisci aperiam dolorum velit corrupti quo
          esse natus hic ipsa nemo alias dicta! Reprehenderit officiis molestias
          quod!
        </p>
        <Link href={"/blog/post"} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </>
  );
};

export default Cart;
