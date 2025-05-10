"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";

const MyScores = () => {
  const myScoreList = [
    {
      name: "Recent Projects",
      score: 2,
      point: 5,
      id: 1,
    },
    {
      name: "Daily Learn Time Hours",
      score: 3,
      point: 8,
      id: 2,
    },
    {
      name: "Cups of coffee",
      score: 5,
      point: 1000,
      id: 3,
    },
    {
      name: "Laravel Projects",
      score: 5,
      point: "10",
      id: 4,
    },
    {
      name: "React Projects",
      score: 5,
      point: "5",
      id: 5,
    },
    {
      name: "Mysql Databases",
      score: 5,
      point: "10",
      id: 6,
    },
  ];
  return (
    <div className="lg:px-[100px] px-4" id="skills">
      <div className="flex justify-center items-center pb-10 text-xl ">
        My Skills
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
        {myScoreList.map((score, index) => (
          <div
            className={cn(
              "col-span-1 rounded-md border-2 border-violet-500 py-6 space-y-4 hover:border-emerald-400 duration-500 cursor-pointer",
              score.id > 3 && "border-red-500 hover:border-sky-500"
            )}
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
