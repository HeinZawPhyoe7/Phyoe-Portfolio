"use client";

import { Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] bg-orange-50" id="contact">
      <div className="mx-40">
        <div className="flex justify-between items-center pt-10">
          <div className="text-orange-200">
            Let&apos; Start A Project Together
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold mb-7">Contact Info</h3>
            <div className="mb-2">
              <h5 className="text-xl opacity-85">Email</h5>
              <p className="text-muted-foreground opacity-90">
                heinzawphyoe2@gmail.com
              </p>
            </div>
            <div className="mb-2">
              <h5>Phone</h5>
              <p className="text-muted-foreground opacity-90">09266870290</p>
              <p className="text-muted-foreground opacity-90">0824873655</p>
            </div>
            <div>
              <h5>Location</h5>
              <p className="text-muted-foreground opacity-90">Bangkok</p>
            </div>
          </div>
          <div>
            <h5 className="text-3xl font-serif font-bold mb-4">Social Media</h5>
            <div className="flex justify-center items-center gap-3">
              <Twitter />
              <Youtube />
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
