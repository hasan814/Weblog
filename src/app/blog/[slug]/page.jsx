import { getPost } from "@/utils/Data";

import SinglePage from "@/templates/SinglePage.jsx/SinglePage";

const Single = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return <SinglePage post={post} />;
};

export default Single;
