import BlogPage from "@/templates/BlogPage/BlogPage";
import { getData } from "@/utils/Fetch";

const Blog = async () => {
  const posts = await getData();
  return <BlogPage posts={posts} />;
};

export default Blog;
