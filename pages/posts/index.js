import AllPosts from "../../components/posts/AllPosts";
import { getAllPost } from "../../utils/post-utils";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;

export const getStaticProps = () => {
  const posts = getAllPost();
  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
};
