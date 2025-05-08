"use client";

import About from "@/components/elements/About";
import Hero from "@/components/elements/Hero";
import MyScores from "@/components/elements/MyScores";
import Nav from "@/components/elements/Nav";
import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <main className="min-h-screen pb-[2000px]">
      <div className="space-y-20">
        <Nav />
        <Hero />
        <MyScores />
        <About />
      </div>
    </main>
  );
};

export default Page;
