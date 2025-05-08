"use client";

import { Plus } from "lucide-react";
import { div } from "motion/react-client";
import React from "react";

const MyScores = () => {
  const myScoreList = [
    {
      name: "Laravel",
      score: 2,
      point: 10,
      id: 1,
    },
    {
      name: "React",
      score: 3,
      point: 15,
      id: 2,
    },
    {
      name: "Cups of coffee",
      score: 5,
      point: 1000,
      id: 3,
    },
  ];
  return (
    <div className="px-[100px]">
      <div className="flex justify-center items-center pb-10 text-xl ">
        My Projects
      </div>
      <div className="grid grid-cols-3 gap-4">
        {myScoreList.map((score, index) => (
          <div
            className="col-span-1 rounded-md border-2 border-violet-500 py-6 space-y-4"
            key={index}
          >
            <div className="flex justify-center items-center">
              <div className="relative w-fit text-6xl text-center font-serif outline-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {score.point}
                <Plus
                  size={40}
                  className="absolute top-[-20px] right-[-30px]"
                />
              </div>
            </div>
            <div className="text-xl text-center font-serif outline-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {score.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyScores;
