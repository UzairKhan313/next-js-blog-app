import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Getting the path.
const postDir = path.join(process.cwd(), "posts");

export const getAllPostFiles = () => {
  return fs.readdirSync(postDir);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extension.
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const posdData = {
    slug: postSlug,
    ...data,
    content,
  };

  return posdData;
};

export function getAllPost() {
  // reading the directory content which return an array.
  const postFiles = getAllPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;
}

export function getFeaturedPost() {
  const allPosts = getAllPost();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
