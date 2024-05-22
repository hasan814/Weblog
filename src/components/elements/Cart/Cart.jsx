import Image from "next/image";
import styles from "./Cart.module.css";
import Link from "next/link";

const Cart = ({ post }) => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image fill alt="Blog" className={styles.img} src={"/Blog1.jpg"} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </>
  );
};

export default Cart;
