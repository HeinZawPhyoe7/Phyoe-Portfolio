"use client";

import dynamic from "next/dynamic";
const DicussAni = dynamic(() => import("@/components/ui/DicussAni"), {
  ssr: false,
});

const About = () => {
  return (
    <div
      className="lg:px-[80px] lg:py-32 py-2 grid lg:grid-cols-2 md:grid-cols-1 bg-orange-50"
      id="about"
    >
      <div className="h-[300px]">
        {/* Adjust height as needed */}
        <DicussAni />
      </div>
      <div className="lg:pt-28 md:p-2">
        <div className="lg:text-6xl text-4xl text-center font-serif font-semibold">
          About Me
        </div>
        <p className="font-serif text-xl text-muted-foreground font-medium lg:px-36 px-2 lg:pt-7 p-2 mx-auto lg:text-start">
          I&apos;m a Freelance Junior Fullstack Developer with hands-on
          experience building and maintaining a wide range of web applications,
          including social media platforms, CRUD systems, eCommerce websites,
          and personal portfolios. I work with both frontend and backend
          technologies—primarily React for crafting responsive user interfaces
          and Laravel for handling server-side logic and database management. I
          continuously strive to write clean, maintainable code and stay up to
          date with best practices in modern web development.
        </p>
      </div>
    </div>
  );
};

export default About;
