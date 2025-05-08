"use client";

import React, { useState } from "react";
import DicussAni from "../ui/DicussAni";

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
