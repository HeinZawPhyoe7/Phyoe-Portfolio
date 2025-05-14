"use client";

import dynamic from "next/dynamic";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
const Animation = dynamic(() => import("@/components/ui/Animation"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="pt-24 pb-10 xl:px-[100px] lg:px-[100px] px-4" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:h-auto">
        <div className="col-span-1 md:hidden h-[300px] px-0 block mb-20">
          <Animation />
        </div>

        <div className="col-span-1 space-y-2">
          <div className="text-[40px] md:text-5xl lg:text-6xl font-bold font-serif pb-2">
            Hello I&apos;m
          </div>
          <TextGenerateEffect
            className="text-[20px] font-bold font-serif"
            words="Hein Zaw Phyoe"
          />
          <TextGenerateEffect
            className="text-[40px] font-bold font-serif"
            words="An Full-Stack Developer"
          />
          <p className="font-serif text-xl text-muted-foreground font-medium w-10/12 pb-3">
            A passionate developer crafting full-stack web apps that solve real
            problems and deliver high-quality results.
          </p>
          <button
            type="button"
            className=" border border-sky-500 text-sky-500 rounded-md p-2 shadow-md cursor-pointer hover:text-green-400 hover:border-green-400"
          >
            Start A Project Together
          </button>
        </div>

        <div className="col-span-1 hidden md:block">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
