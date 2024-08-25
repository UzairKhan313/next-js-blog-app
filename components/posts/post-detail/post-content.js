import ReackMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Import a theme for syntax highlighting
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"; // Import a theme for syntax highlighting
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"; // Import a theme for syntax highlighting

import classes from "./post-content.module.css";

import PostHeader from "./post-header";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: (paragraph) => {
      const { node } = paragraph;

      // Check if the first child is an image
      if (node.children[0].tagName === "img") {
        const image = node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code: ({
      node,
      value,
      inline,
      language,
      className,
      children,
      ...props
    }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          // language={language}
          PreTag="div"
          {...props}
          children={value}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReackMarkdown components={customComponents}>
        {post.content}
      </ReackMarkdown>
    </article>
  );
};

export default PostContent;
