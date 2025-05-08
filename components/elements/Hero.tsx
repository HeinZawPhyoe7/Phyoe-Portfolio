"use client";

import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
const Animation = dynamic(() => import("@/components/ui/Animation"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="pt-24 pb-10">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 space-y-2">
          <div className="text-[40px] md:text-5xl lg:text-6xl font-bold font-serif pb-2">
            Hello I&apos;m
          </div>
          <TextGenerateEffect
            className="text-[20px] font-bold font-serif"
            words="Hein Zaw Phyoe An"
          />
          <TextGenerateEffect
            className="text-[40px] font-bold font-serif"
            words="Full-Stack Developer"
          />
          <p className="font-serif text-xl text-muted-foreground font-medium w-10/12 pb-3">
            A passionate developer crafting full-stack web apps that solve real
            problems and deliver high-quality results.
          </p>
          <Button variant="outline" className="">
            Start A Project Together
          </Button>
        </div>
        <div className="col-span-1">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
