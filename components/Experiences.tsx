import { workExperience } from "@/constants";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="mt-12 grid w-full grid-cols-1 gap-10 px-2 lg:grid-cols-2 lg:px-0">
      {workExperience.map((card) => (
        <Button
          key={card.id}
          borderRadius="1.75rem"
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          <div className="flex flex-col gap-2 p-3 py-6 md:p-2 lg:flex-row lg:items-center lg:p-10">
            <Image
              width={64}
              height={64}
              src={card.thumbnail}
              alt={card.thumbnail}
              className="w-16 md:w-20 lg:w-32"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl font-bold md:text-2xl">
                {card.title}
              </h1>
              <p className="text-white-100 mt-3 text-start font-semibold">
                {card.desc}
              </p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Experiences;
