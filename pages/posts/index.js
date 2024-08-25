import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPost } from "../../utils/post-utils";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="All Posts about programing and web development"
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
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
