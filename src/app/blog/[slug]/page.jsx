import { getPost } from "@/utils/Data";

import SinglePage from "@/templates/SinglePage.jsx/SinglePage";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const Single = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return <SinglePage post={post} />;
};

export default Single;
