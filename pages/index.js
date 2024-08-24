import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturePosts from "../components/home-page/feature-posts";

const HomePage = () => {
  const DUMMY_POST = [
    {
      title: "Getting Started with Next js",
      slug: "getting-started-with-next-js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is react frameworkd for production - it make building full stack React application and sites a breeze and ships with built in Server side rendering.",
      date: "2024-8-24",
    },
    {
      title: "File based Routing",
      slug: "file-based-routing",
      image: "nextjs-file-based-routing.png",
      excerpt:
        "NextJs is react frameworkd for production - it make building full stack React application and sites a breeze and ships with built in Server side rendering.",
      date: "2024-2-4",
    },
    {
      title: "Knowing React First",
      slug: "knowing-react-first",
      image: "knowing-react-first.png",
      excerpt:
        "NextJs is react frameworkd for production - it make building full stack React application and sites a breeze and ships with built in Server side rendering.",
      date: "2024-8-24",
    },
    {
      title: "Installing a window Operataing ",
      slug: "window-operating-system",
      image: "window-opetating-system.png",
      excerpt:
        "NextJs is react frameworkd for production - it make building full stack React application and sites a breeze and ships with built in Server side rendering.",
      date: "2024-7-14",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={DUMMY_POST} />
    </Fragment>
  );
};

export default HomePage;
