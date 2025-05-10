"use client";

import dynamic from "next/dynamic";
const DicussAni = dynamic(() => import("@/components/ui/DicussAni"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="px-[80px] py-32 grid grid-cols-2 bg-orange-50" id="about">
      <div className="h-[400px]">
        {/* Adjust height as needed */}
        <DicussAni />
      </div>
      <div className="pt-28">
        <div className="text-6xl text-center font-serif font-semibold">
          About Me
        </div>
        <p className="font-serif text-xl text-muted-foreground font-medium px-36 pt-7 mx-auto text-start">
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
