import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/constants";
import { cn } from "@/utils/cn";

const About = () => {
  return (
    <>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[text-lg]", item.className)}
            icon={item.img}
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default About;
