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
      href: "",
    },
    {
      name: "About",
      id: 2,
      href: "",
    },
    {
      name: "Projects",
      id: 3,
      href: "",
    },
    {
      name: "Contact",
      id: 4,
      href: "",
    },
  ];

  const socialIconList = [
    {
      component: (
        <Facebook className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 1,
    },
    {
      component: (
        <Linkedin className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 2,
    },
    {
      component: (
        <Instagram className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 3,
    },
    {
      component: (
        <Github className="hover:opacity-70 cursor-pointer" size={25} />
      ),
      id: 4,
    },
  ];
  return (
    <div className="px-[250px]">
      <div className="flex justify-between items-center px-4 py-4 font-serif">
        <div className="font-mono font-semibold text-xl">
          Hein Zaw <span className="block">Phyoe.</span>
        </div>
        <div className="flex justify-between items-center gap-6">
          {menuList.map((menu, index) => (
            <Link
              href={menu.href}
              className={cn(
                "hover:border-b-2 hover:border-b-indigo-400 cursor-pointer pb-1",
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
        <div className="flex justify-between items-center gap-x-6 text-indigo-400">
          {socialIconList.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                item.id === 4 && "text-red-400",
                item.id === 2 && "text-green-400",
                item.id === 3 && "text-yellow-400"
              )}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
