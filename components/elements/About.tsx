"use client";

import dynamic from "next/dynamic";
const DicussAni = dynamic(() => import("@/components/ui/DicussAni"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="px-[200px] bg-red-400">
      <DicussAni />
    </div>
  );
};

export default About;
