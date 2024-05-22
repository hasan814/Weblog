import Cart from "@/elements/Cart/Cart";
import styles from "./PostCard.module.css";
import { v4 as uuidv4 } from "uuid";

const PostCard = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={uuidv4()}>
          <Cart post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostCard;
