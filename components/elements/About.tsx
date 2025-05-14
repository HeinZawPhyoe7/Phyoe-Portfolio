"use client";

import dynamic from "next/dynamic";
import WriteProgramAni from "../ui/WriteProgramAni";
const DicussAni = dynamic(() => import("@/components/ui/DicussAni"), {
  ssr: false,
});

const About = () => {
  return (
    <div
      className="xl:px-[80px] xl:py-32 py-2 md:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-orange-50"
      id="about"
    >
      <div className="flex justify-center items-center col-span-1">
        <div className="max-h-12 xl:max-h-[300px] lg:max-h-[250px] md:max-h-[200px] sm:max-h-[150px] hidden md:block">
          {/* Adjust height as needed */}
          <DicussAni />
        </div>
        <div className="md:hidden block sm:h-[400px] h-[500px]">
          <WriteProgramAni />
        </div>
      </div>
      <div className="md:pt-10 xl:pt-4 md:p-2 col-span-1">
        <div className="xl:text-6xl text-xl lg:text-5xl sm:mt-20 text-center font-serif font-semibold">
          About Me
        </div>
        <p className="font-serif text-xl text-muted-foreground font-medium xl:px-24 xl:mt-0 px-6 lg:pt-7 p-2 mx-auto lg:text-start">
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
