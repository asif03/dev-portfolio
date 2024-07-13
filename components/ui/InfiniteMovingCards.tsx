"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    clientImage?: string;
    title: string;
    country?: string;
    rating?: string;
    platform?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 bg-white/85 py-4 dark:bg-black-100",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="border-b-1 relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 px-8
            py-6 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="min-h-28 text-sm font-normal leading-[1.6] text-gray-900 dark:text-gray-100">
                {item.quote}
              </div>
              <div className=" mt-6 flex flex-row items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2 text-sm font-normal leading-[1.6] text-gray-400">
                    <Image
                      className="rounded-full"
                      src={item.clientImage}
                      width={40}
                      height={36}
                      alt="Profile Image"
                    />
                    <div className="flex flex-col text-sm font-normal leading-[1.6] text-gray-500 dark:text-gray-400">
                      <span>{item.name}</span>
                      <span>{item.country}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-yellow-600">
                    <span className="text-gray-500 dark:text-gray-400">
                      Platform: {item.platform} (
                    </span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="px-1 text-black dark:text-white">
                      5.0)
                    </span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
