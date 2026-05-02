"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Discover() {
  // Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-32 md:pb-40">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/e10.png"
          alt="background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 px-4 md:px-10 xl:px-16 pt-16 md:pt-20"
      >

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-10 md:mb-16 xl:mb-20 2xl:mb-45 font-canela font-normal text-[#2d2d2d]"
        >
          Discover the program that fits your life and goals
        </motion.h1>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT FORM */}
          <motion.div
            variants={container}
            className="flex flex-col md:justify-end lg:justify-center gap-6 max-w-[520px] mx-auto md:mx-0 md:pt-15 lg:pt-20 xl:pb-20 2xl:pb-30 2xl:pl-50"
          >

            {/* NAME */}
            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="NAME"
              className="w-full py-6 px-6 bg-[#ebe5db]/80 backdrop-blur-sm 
              rounded-full outline-none border border-[#c79a3b] 
              placeholder:text-[#b8aa95] placeholder:text-lg tracking-wide transition-all"
            />

            {/* EMAIL */}
            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="EMAIL"
              className="w-full py-6 px-6 bg-[#ebe5db]/80 backdrop-blur-sm 
              rounded-full outline-none border border-[#c79a3b] 
              placeholder:text-[#b8aa95] placeholder:text-lg tracking-wide transition-all"
            />

            {/* MESSAGE */}
            <motion.input
              variants={fadeUp}
              whileFocus={{ scale: 1.03 }}
              placeholder="MESSAGE"
              className="w-full py-6 px-6 bg-[#ebe5db]/80 backdrop-blur-sm 
              rounded-full outline-none border border-[#c79a3b] 
              placeholder:text-[#b8aa95] placeholder:text-lg tracking-wide transition-all"
            />

            {/* BUTTON */}
            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[#3f5c4a] hover:bg-[#2f4638] text-white 
                  px-8 py-6 rounded-full text-base md:w-fit"
                >
                  Book Discovery Session
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE (optional content or empty for now) */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex items-center justify-center"
          >
            {/* You can add illustration/content here if needed */}
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}