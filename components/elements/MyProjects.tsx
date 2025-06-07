"use client";

import React from "react";
import { ThreeDCardDemo } from "../ui/MyThreeDCardEffect";
import FirstImage from "@/assets/test.jpg";
import BusTicketImage from "@/assets/BusTicket.png";
import TodolistImage from "@/assets/Todolist.png";
import ExpenseTracker from "@/assets/ExpenseTracker.png";

const MyProjects = () => {
  const myProjectList = [
    // {
    //   name: "Ecommerce Project",
    //   description:
    //     "Real-time eCommerce platform with multi-role access, live product updates, and dynamic promotions for Admins, Sellers, and Users.",
    //   id: 1,
    //   img: FirstImage,
    //   href: "https://twitter.com/mannupaaji",
    //   isLike: false,
    //   totalLikes: 42,
    // },
    {
      name: "Online Bus Tickets Project",
      description:
        "Online bus booking system with real-time seat selection, dynamic availability, and secure fullstack management for users and admins.",
      id: 2,
      img: BusTicketImage,
      href: "https://www.youtube.com/watch?v=za4RyB-ABN0",
      isLike: false,
      totalLikes: 72,
    },
    // {
    //   name: "Facebook Clone Project",
    //   description:
    //     "Social media app with user authentication, dynamic posts, image uploads, and secure content management, offering a seamless user experience inspired by core Facebook features.",
    //   id: 3,
    //   img: FirstImage,
    //   href: "https://twitter.com/mannupaaji",
    //   isLike: false,
    //   totalLikes: 38,
    // },
    {
      name: "Todo List Project",
      description:
        "A simple and efficient To-Do List application designed to help users manage daily tasks with ease.",
      id: 4,
      img: TodolistImage,
      href: "https://www.youtube.com/watch?v=mRcGVKPsQ68",
      isLike: false,
      totalLikes: 12,
    },
    {
      name: "Daily Expense Tracker",
      description:
        "A fullstack expense management app with user authentication (register, login, logout) and the ability to add and view daily income and expenses in real time.",
      id: 5,
      img: ExpenseTracker,
      href: "https://www.youtube.com/watch?v=qsvxn90Z1ko",
      isLike: false,
      totalLikes: 58,
    },
  ];

  return (
    <div id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:px-[20px] xl:px-[100px] px-4 md:py-0">
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
