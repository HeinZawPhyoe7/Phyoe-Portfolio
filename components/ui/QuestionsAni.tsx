"use client";

import Lottie from "lottie-react";
import LottieFour from "@/public/QuestionsAni.json";

const QuestionsAni = () => {
  return (
    <div>
      <div className="w-fit">
        <Lottie animationData={LottieFour} loop={true} />
      </div>
    </div>
  );
};

export default QuestionsAni;
