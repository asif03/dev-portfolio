import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[89vw] flex-col items-center justify-center gap-4">
        <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
          Dynamic Web Magic with Next.js
        </h2>
        <TextGenerateEffect
          className="text-center text-2xl lg:text-7xl"
          words="Transforming Concepts into Seamless User Experiences"
        />
        <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
          Hi! I&apos;m Asif, a Next.js Developer based in Bangladesh.
        </p>
        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
