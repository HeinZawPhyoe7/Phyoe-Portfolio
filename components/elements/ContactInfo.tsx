"use client";

import { Github, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] bg-orange-50" id="contact">
      <div className="xl:mx-40 lg:mx-4 md:mx-0 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 pt-10">
          <div className="col-span-1 text-violet-600 text-2xl lg:mx-0 lg:my-auto mb-12 font-serif font-semibold">
            Let&apos; Start A Project Together
          </div>
          <div className="col-span-1 lg:mx-auto md:mx-0 mb-12">
            <h3 className="text-3xl font-serif font-bold lg:mb-7 mb-4">
              Contact Info
            </h3>
            <div className="mb-4">
              <h5 className="text-xl opacity-85 font-serif font-bold">Email</h5>
              <p className="text-muted-foreground opacity-90">
                heinzawphyoe2@gmail.com
              </p>
            </div>
            <div className="mb-4">
              <h5 className="text-xl opacity-85 font-serif font-bold">Phone</h5>
              <p className="text-muted-foreground opacity-90">
                09266870290 || +959266870290
              </p>
              <p className="text-muted-foreground opacity-90">
                0824873655 || +66824873655
              </p>
            </div>
            <div>
              <h5 className="text-xl opacity-85 font-serif font-bold">
                Location
              </h5>
              <p className="text-muted-foreground opacity-90">Bangkok</p>
            </div>
          </div>
          <div className="col-span-1 lg:mx-auto">
            <h5 className="text-3xl font-serif font-bold mb-4">Social Media</h5>
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex justify-start gap-6 mb-2 items-center">
                <Twitter />
                <a
                  href="@Phyoe28977"
                  target="__blank"
                  className="font-serif text-blue-400 text-xl"
                >
                  Twitter
                </a>
              </div>
              <div className="flex justify-start gap-6 mb-2 items-center">
                <Youtube />
                <a
                  href=""
                  target="__blank"
                  className="font-serif text-blue-400 text-xl"
                >
                  Youtube
                </a>
              </div>
              <div className="flex justify-start gap-6 mb-2 items-center">
                <Mail />
                <a
                  href=""
                  target="__blank"
                  className="font-serif text-blue-400 text-xl"
                >
                  Mail
                </a>
              </div>
              <div className="flex justify-start gap-6 mb-2 items-center">
                <Github />
                <a
                  href="https://github.com/HeinZawPhyoe7"
                  target="__blank"
                  className="font-serif text-blue-400 text-xl"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Hein
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
