import About from "@/components/elements/About";
import Hero from "@/components/elements/Hero";
import Nav from "@/components/elements/Nav";
import React from "react";

const page = () => {
  return (
    <main className="">
      <div>
        <Nav />
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default page;
