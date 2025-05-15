"use client";
import React, { useState } from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import emailjs from "@emailjs/browser";

const Message = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceId = "service_f6zckki";
    const templateId = "template_44cerlf";
    const publicKey = "4y3dWmjV2K9BsPYyU";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Hein Zaw Phyoe",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sending Email", error);
      });
  };

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
        <form className="emailForm my-auto mx-auto" onSubmit={handleSubmit}>
          <div className="pb-6 flex justify-start md:gap-6 items-center">
            <input
              className="p-2 border w-[200px] md:w-[254px]"
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 border w-[200px] md:w-[254px]"
              type="email"
              value={email}
              placeholder="Mail Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-6">
            <textarea
              className="border gap-4 h-40 w-[400px] md:w-[530px]"
              value={message}
              placeholder="Your Message..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-orange-600 border rounded-md p-3 shadow-md"
            >
              Send Me Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
