"use client";

import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const menuList = [
    {
      name: "Home",
      id: 1,
      href: "#home",
    },
    {
      name: "Skills",
      id: 2,
      href: "#skills",
    },
    {
      name: "About",
      id: 3,
      href: "#about",
    },
    {
      name: "Projects",
      id: 4,
      href: "#projects",
    },
    {
      name: "Contact",
      id: 5,
      href: "#contact",
    },
  ];

  const socialIconList = [
    {
      component: (
        <Facebook className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 1,
      href: "https://www.facebook.com/share/1DbTmVQGeE/",
    },
    {
      component: (
        <Linkedin className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 2,
      href: "https://www.linkedin.com/in/hein-zaw-phyoe-556222342/",
    },
    {
      component: (
        <Instagram className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 3,
      href: "",
    },
    {
      component: (
        <Github className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 4,
      href: "https://github.com/HeinZawPhyoe7",
    },
  ];
  return (
    <div className="lg:px-[250px] md:[100px] px-4">
      <div className="flex justify-between items-center px-4 py-4 font-serif">
        <div className="font-mono font-semibold text-xl">
          Hein Zaw <span className="block">Phyoe.</span>
        </div>
        <div className="lg:flex hidden justify-between items-center gap-6 ">
          {menuList.map((menu, index) => (
            <Link
              href={menu.href}
              className={cn(
                "hover:border-b-2 hover:border-b-indigo-400 cursor-pointer pb-1 ",
                menu.id === 4 && "hover:border-b-red-400",
                menu.id === 2 && "hover:border-b-green-400",
                menu.id === 3 && "hover:border-b-yellow-400"
              )}
              key={menu.id}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="lg:flex hidden justify-between items-center gap-x-6 text-indigo-400">
          {socialIconList.map((item, index) => (
            <a
              href={item.href}
              key={item.id}
              target="__blank"
              className={cn(
                item.id === 4 && "text-red-400",
                item.id === 2 && "text-green-400",
                item.id === 3 && "text-yellow-400"
              )}
            >
              {item.component}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
