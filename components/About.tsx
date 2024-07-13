"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IconTableColumn } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
};
export default About;

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl   border border-transparent bg-neutral-100  bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"></div>
);

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="/front-end.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Just code in Javascript for Frontend
        </p>
      </motion.div>
      <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
        <Image
          src="/back-end.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Node.JS/Laravel is cool for Backend
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="/mobile-app.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          I love React Native for Mobile Apps.
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <Image
          src="/asif.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10 rounded-full"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Next,
          Laravel, CodeIgniter that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <p className="text-xs text-neutral-500">
          Use Javascript / React / Next.JS
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="w-full text-right text-xs text-neutral-500">
          Use PHP / Laravel / CodeIgniter
        </p>
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <p className="w-full text-xs text-neutral-500">
          Use CSS / Tailwind / Bootstrap
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="w-full text-right text-xs text-neutral-500">
          Use MySQL / Postgress / MongoDB
        </p>
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Master in Tech Stack",
    description: (
      <span className="text-sm">
        I prioritize client collaboration, fostering open communication
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "I constantly try to improve",
    description: <span className="text-sm">My tech stack</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
