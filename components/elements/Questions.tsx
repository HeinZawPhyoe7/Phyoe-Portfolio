"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";
const ProgramAni = dynamic(() => import("../ui/ProgramAni"), {
  ssr: false,
});

const QuestionsAni = dynamic(() => import("../ui/QuestionsAni"), {
  ssr: false,
});

const Questions = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                  <AccordionTrigger>
                    Is your portfolio responsive?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely. It&apos;s fully responsive and optimized for all
                    screen sizes—from desktops to tablets and mobile phones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I collaborate with you?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! I&apos;m open to freelance, part-time, or
                    collaborative projects. Just reach out via the contact
                    section.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is it maintained regularly?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. I keep the content, projects, and dependencies up to
                    date as I grow and learn new technologies.
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
