import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturePosts from "../components/home-page/feature-posts";
import { getFeaturedPost } from "../utils/post-utils";

const HomePage = ({ featuredPosts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={featuredPosts} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPost();
  return {
    props: {
      featuredPosts: featuredPosts,
    },
    revalidate: 600,
  };
};
