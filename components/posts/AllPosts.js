import classses from "./all-posts.module.css";
import PostGrid from "./post-grid";

const AllPosts = ({ posts }) => {
  return (
    <section className={classses.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
