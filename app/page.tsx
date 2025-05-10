"use client";

import About from "@/components/elements/About";
import ContactInfo from "@/components/elements/ContactInfo";
import Hero from "@/components/elements/Hero";
import MyProjects from "@/components/elements/MyProjects";
import MyScores from "@/components/elements/MyScores";
import Nav from "@/components/elements/Nav";
import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <main className="">
      <div className="lg:space-y-20 md:space-y-4">
        <Nav />
        <Hero />
        <MyScores />
        <About />
        <MyProjects />
        <ContactInfo />
      </div>
    </main>
  );
};

export default Page;
