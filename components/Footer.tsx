import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:justify-between">
      <div className="text-sm text-white">
        Copyright &copy; 2024 CodeWithAsif
      </div>
      <div className="flex justify-end gap-5">
        {socialMedia.map(({ id, img, url }) => (
          <Link
            href={url}
            target="_blank"
            key={id}
            className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
          >
            <Image src={img} width={20} height={20} alt="Social Link" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
