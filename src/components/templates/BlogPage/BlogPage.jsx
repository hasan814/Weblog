import PostCard from "@/moduels/PostCard/PostCard";
import styles from "./BlogPage.module.css";

const BlogPage = ({ posts }) => {
  return (
    <div className={styles.container}>
      <PostCard posts={posts} />
    </div>
  );
};

export default BlogPage;
