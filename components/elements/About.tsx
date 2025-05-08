"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const DicussAni = dynamic(() => import("@/components/ui/DicussAni"), {
  ssr: false,
});

const About = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      <DicussAni
        isStopped={isStopped}
        isPaused={isPaused}
        setIsStopped={setIsStopped}
        setIsPaused={setIsPaused}
      />
    </div>
  );
};

export default About;
