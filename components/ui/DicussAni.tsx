import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/public/Dicuss-Ani.json";

const DicussAni = ({ isStopped, isPaused, setIsStopped, setIsPaused }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};

export default DicussAni;
