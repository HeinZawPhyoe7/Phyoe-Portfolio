"use client";

import React, { useState } from "react";
import LottieTwo from "@/public/Animation .json";
import Lottie from "lottie-react";

const Animation = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="flex justify-center items-center ">
      <div className="w-fit pl-28">
        <Lottie animationData={LottieTwo} loop={true} />
      </div>
    </div>
  );
};

export default Animation;
