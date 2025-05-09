"use client";

import React from "react";
import { ThreeDCardDemo } from "../ui/MyThreeDCardEffect";
import FirstImage from "@/assets/test.jpg";

const MyProjects = () => {
  const myProjectList = [
    {
      name: "Ecommerce Project",
      description:
        "Real-time eCommerce platform with multi-role access, live product updates, and dynamic promotions for Admins, Sellers, and Users.",
      id: 1,
      img: FirstImage,
      href: "https://twitter.com/mannupaaji",
      isLike: false,
      totalLikes: 42,
    },
    {
      name: "Online Bus Tickets Project",
      description:
        "Online bus booking system with real-time seat selection, dynamic availability, and secure fullstack management for users and admins.",
      id: 2,
      img: FirstImage,
      href: "https://twitter.com/mannupaaji",
      isLike: false,
      totalLikes: 72,
    },
    {
      name: "Facebook Clone Project",
      description:
        "Social media app with user authentication, dynamic posts, image uploads, and secure content management, offering a seamless user experience inspired by core Facebook features.",
      id: 3,
      img: FirstImage,
      href: "https://twitter.com/mannupaaji",
      isLike: false,
      totalLikes: 38,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 px-[100px]">
        {myProjectList.map((project, index) => (
          <div key={index}>
            <ThreeDCardDemo project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
