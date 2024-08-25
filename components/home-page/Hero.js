import React from "react";
import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/uzair.jpg"
          alt="An image showing Uzair khan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Uzair</h1>
      <p>
        I write blog posts about web development - especially MERN stack
        development and Next js
      </p>
    </section>
  );
};

export default Hero;
