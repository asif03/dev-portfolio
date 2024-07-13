"use client";
import React from "react";
import { motion } from "framer-motion";
import LampContainer from "./ui/LampContainer";

const ContactUs = () => {
  return (
    <LampContainer className="absolute left-0 top-0 w-full">
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 150 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-slate-500 to-slate-900 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hire Me on
      </motion.h1>
    </LampContainer>
  );
};

export default ContactUs;
