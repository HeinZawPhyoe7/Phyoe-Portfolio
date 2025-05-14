"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Message = () => {
  return (
    <div className="bg-orange-50">
      <div className="grid md:grid-cols-2 grid-cols-1 pt-20 md:pb-20 pb-10 xl:px-[100px] lg:px-[100px] px-4">
        <div className="col-span-1 text-start pb-8">
          <div className="font-bold font-serif text-4xl md:pl-32 md:pr-10">
            <div className="text-orange-400 font-serif font-bold text-xl">
              Contact With Me
            </div>
            <TextGenerateEffect
              words="Have Any Project In"
              className="md:text-[20px] font-bold font-serif"
            />
            <TextGenerateEffect
              words="Your Mind?"
              className="md:text-[20px] font-bold font-serif pb-6"
            />
            <p className="font-serif text-xl text-muted-foreground font-medium ">
              I'm always open to new ideas and collaborations. If you have a
              project in mind, let&apos;s connect and bring it to life!
            </p>
          </div>
        </div>
        <div className="my-auto mx-auto">
          <div className="pb-6 flex justify-start md:gap-6 items-center">
            <input
              className="p-2 border w-[200px] md:w-[254px]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="p-2 border w-[200px] md:w-[254px]"
              type="text"
              placeholder="Mail Address"
            />
          </div>
          <div className="pb-6">
            <textarea
              className="border gap-4 h-40 w-[400px] md:w-[530px]"
              placeholder="Your Message..."
            />
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-orange-600 border rounded-md p-3 shadow-md"
            >
              Send Me Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
