import Image from "next/image";
import styles from "./SinglePage.module.css";
import PostUser from "../PostUser/PostUser";
import { Suspense } from "react";

const SinglePage = ({ post }) => {
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src={"/Blog1.jpg"}
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.published}>Published</span>
            <span className={styles.detailDate}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePage;
