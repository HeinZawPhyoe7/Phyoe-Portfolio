"use client";

import About from "@/components/elements/About";
import ContactInfo from "@/components/elements/ContactInfo";
import Hero from "@/components/elements/Hero";
import Message from "@/components/elements/Message";
import MyProjects from "@/components/elements/MyProjects";
import MyScores from "@/components/elements/MyScores";
import Nav from "@/components/elements/Nav";
import Questions from "@/components/elements/Questions";

const Page = () => {
  return (
    <main className="">
      <div className="xl:space-y-20 space-y-4">
        <Nav />
        <Hero />
        <MyScores />
        <About />
        {/* <MyProjects />
        <Message />
        <Questions />
        <ContactInfo /> */}
      </div>
    </main>
  );
};

export default Page;
