import Lottie from "lottie-react";
import React, { useState } from "react";
import animationData from "@/public/Animation .json";

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div>
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
};

export default Animation;
