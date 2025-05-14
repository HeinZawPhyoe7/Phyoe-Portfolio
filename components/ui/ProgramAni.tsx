"use client";

import Lottie from "lottie-react";
import LottieFive from "@/public/ProgramAni.json";
const ProgramAni = () => {
  return (
    <div>
      <div className="w-fit">
        <Lottie animationData={LottieFive} loop={true} />
      </div>
    </div>
  );
};

export default ProgramAni;
