import { getPosts } from "@/utils/Data";

import BlogPage from "@/templates/BlogPage/BlogPage";

const Blog = async () => {
  const posts = await getPosts();
  return <BlogPage posts={posts} />;
};

export default Blog;
