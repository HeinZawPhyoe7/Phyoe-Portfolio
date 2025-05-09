"use client";

import Lottie from "lottie-react";
import LottieTwo from "@/public/Dicuss-Ani.json";

const DicussAni = () => {
  return (
    <div className="">
      <div className="">
        <Lottie animationData={LottieTwo} loop={true} />
      </div>
    </div>
  );
};

export default DicussAni;
