"use client";

import LottieTwo from "@/public/Animation.json";
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-fit lg:pl-28">
        <Lottie animationData={LottieTwo} loop={true} />
      </div>
    </div>
  );
};

export default Animation;
