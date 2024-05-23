import BlogPage from "@/templates/BlogPage/BlogPage";
import { getPosts } from "@/utils/Data";

const Blog = async () => {
  const posts = await getPosts();
  return <BlogPage posts={posts} />;
};

export default Blog;
