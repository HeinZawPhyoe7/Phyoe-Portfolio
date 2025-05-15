"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";
const ProgramAni = dynamic(() => import("@/components/ui/ProgramAni"), {
  ssr: false,
});

const QuestionsAni = dynamic(() => import("@/components/ui/QuestionsAni"), {
  ssr: false,
});

const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

const Questions = () => {
  return (
    isClient && (
      <div className="" id="questions">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1 flex justify-center items-center">
            <div className="hidden md:block lg:h-[600px] md:h-[450px]">
              <QuestionsAni />
            </div>
            <div className="md:hidden block md:h-[300px] lg:h-[500px]">
              <ProgramAni />
            </div>
          </div>
          <div className="col-span-1 px-4 mt-7 md:pt-40 xl:pt-52 md:px-7">
            <div className="text-orange-400 font-serif font-bold">
              Common Questions
            </div>
            <div className="text-4xl font-serif font-bold">
              General Questions
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Questions;
