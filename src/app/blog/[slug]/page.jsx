import SinglePage from "@/templates/SinglePage.jsx/SinglePage";
import { getDataById } from "@/utils/Fetch";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getDataById(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const Single = async ({ params }) => {
  const { slug } = params;
  const post = await getDataById(slug);

  return <SinglePage post={post} />;
};

export default Single;
