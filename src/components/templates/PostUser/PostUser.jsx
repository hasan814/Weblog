import { getUserById } from "@/utils/Fetch";
import styles from "./PostUser.module.css";

const PostUser = async ({ userId }) => {
  const user = await getUserById(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
