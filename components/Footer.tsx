import Link from "next/link";
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-3 px-0 py-5 sm:px-2 lg:flex-row lg:justify-between lg:gap-0">
      <div className="text-sm font-semibold">
        Copyright &copy; 2024 CodeWithAsif
      </div>
      <div className="flex justify-end gap-3">
        <Link
          href="https://github.com/asif03"
          target="_blank"
          className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/md-asif-iqbal-642b011b/"
          target="_blank"
          className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://www.linkedin.com/in/md-asif-iqbal-642b011b/"
          target="_blank"
          className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
        >
          <BsFacebook />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
