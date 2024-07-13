import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaArrowTurnDown, FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center pt-24 lg:pt-0">
      <div className="flex max-w-[89vw] flex-col items-center justify-center gap-4">
        <h2 className="max-w-xl text-center text-sm font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-100">
          Dynamic Web Magic with Full Stack Development
        </h2>
        <TextGenerateEffect
          className="text-center text-2xl lg:text-7xl"
          words="Transforming Concepts into Seamless User Experiences"
        />
        <p className="mb-4 text-center text-sm font-bold md:text-lg md:tracking-wider lg:text-2xl">
          Hi! I&apos;m Asif, a Full Stack Developer.
        </p>
        <div className="flex flex-col items-center justify-center">
          <h3 className="flex w-full flex-row items-center justify-center text-2xl font-bold text-yellow-600">
            <span>Hire Me on</span>
            <FaArrowTurnDown className="mt-5" />
          </h3>
          <div className="flex w-full flex-row items-center justify-center gap-4">
            <a href="https://www.freelancer.com/u/asif03" target="_blank">
              <MagicButton
                title="Freelancer"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01b02b523656cbb819"
              target="_blank"
            >
              <MagicButton
                title="Upwork"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
