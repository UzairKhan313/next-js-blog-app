import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPostFiles, getPostData } from "../../utils/post-utils";

const PostDetailsPage = ({ post }) => {
  return <PostContent post={post} />;
};

export default PostDetailsPage;

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const getPostFileNames = getAllPostFiles();
  const slug = getPostFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  const filePaths = slug.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
  return {
    paths: filePaths,
    fallback: false,
  };
};
