# Blog Website Project

This is a full-featured blog website built with Next.js and MongoDB. The project includes several key functionalities, such as featured blog posts, individual blog pages with inline images and code snippets, and a contact form that stores submissions in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contact](#contact)

## Features

- **Starting Page:** The website includes a homepage that displays featured blog posts.
- **Featured Posts:** As the owner, you can decide which blog posts should be featured on the homepage.
- **All Blog Posts Page:** A dedicated page listing all blog posts available on the website.
- **Individual Blog Pages:** Users can read individual blog posts with support for inline images and code snippets, which are rendered in a visually appealing way.
- **Markdown Support:** Blog posts are written in Markdown and stored as Markdown files. These are then rendered as HTML.
- **Contact Page:** A contact form allows visitors to send messages. The form submissions are stored in a MongoDB database using an API route.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **MongoDB:** A NoSQL database used to store contact form submissions.
- **Markdown:** Used for writing and storing blog posts in a structured format.
- **CSS:** Styling for the blog, with a focus on responsiveness and accessibility.

## Project Structure

```plaintext
├── public
│   ├── images
│   └── ...
├── pages
│   ├── api
│   │   └── contact.js
│   ├── index.js
│   ├── blogs
│   │   └── [slug].js
│   ├── all-posts.js
│   └── contact.js
├── posts
│   └── sample-post.md
├── components
│   ├── Layout.js
│   ├── Header.js
│   ├── Footer.js
│   └── ...
├── styles
│   └── globals.css
└── ...
```

## To Start with this project.

    bash```
    git clone https://github.com/UzairKhan313/next-js-blog-app.git

    cd next-js-blog-app

    ```

## Install all the dependencies.

    bash```
    npm install

    ```

## Run the development server.

    bash```
    npm run dev

    ```
