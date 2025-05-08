import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-24 pb-10">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1">
          <div className="text-[40px] md:text-5xl lg:text-6xl font-bold font-serif">
            Hello I'm
          </div>
          <TextGenerateEffect
            className="text-[40px] font-bold font-serif"
            words="Hein Zaw Phyoe An"
          />
          <TextGenerateEffect
            className="text-[40px] font-bold font-serif"
            words="Full-Stack Developer"
          />
          <p className="font-serif text-sm opacity-80 w-10/12">
            with a passion for creating dynamic, responsive, and user-focused
            web applications. I specialize in building seamless digital
            experiences from front to back, blending creativity with clean code
            to solve real-world problems and deliver value through technology.
          </p>
        </div>
        <div className="col-span-1">agdagdsdfs</div>
      </div>
    </div>
  );
};

export default Hero;
