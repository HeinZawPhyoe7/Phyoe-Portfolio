"use client";

import Lottie from "lottie-react";
import LottieThree from "@/public/WriteProgramAni.json";

const WriteProgramAni = () => {
  return (
    <div>
      <div>
        <Lottie animationData={LottieThree} loop={true} />
      </div>
    </div>
  );
};

export default WriteProgramAni;
