import { v4 as uuidv4 } from "uuid";
import { deletePost } from "@/utils/action";
import { getPosts } from "@/utils/Data";

import styles from "./AdminPosts.module.css";
import Image from "next/image";

const AdminPosts = async () => {
  // ========== Fetch Data ===========
  const posts = await getPosts();

  // ========== Rendering ===========
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={uuidv4()}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt="Post"
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input
              type="hidden"
              placeholder="Delete..."
              value={post.id}
              name="id"
            />
            <button className={styles.postBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
