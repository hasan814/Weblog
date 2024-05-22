import Cart from "@/elements/Cart/Cart";
import styles from "./PostCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <Cart />
      </div>
      <div className={styles.post}>
        <Cart />
      </div>
      <div className={styles.post}>
        <Cart />
      </div>
      <div className={styles.post}>
        <Cart />
      </div>
    </div>
  );
};

export default PostCard;
