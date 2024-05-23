import Image from "next/image";
import styles from "./SinglePage.module.css";
import PostUser from "../PostUser/PostUser";
import { Suspense } from "react";

const SinglePage = ({ post }) => {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image fill src={post.img} alt="singlePost" className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading ...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.published}>Published</span>
            <span className={styles.detailDate}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePage;
