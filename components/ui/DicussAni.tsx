"use client";

import Lottie from "lottie-react";
import LottieTwo from "@/public/Dicuss-Ani.json";

const DicussAni = () => {
  return (
    <div className="max-w-52">
      <Lottie animationData={LottieTwo} loop={true} />
    </div>
  );
};

export default DicussAni;
