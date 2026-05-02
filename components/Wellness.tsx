"use client";

import Link from "next/link";
import Header from "./Header";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Wellness() {
  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-20 min-h-[400px] md:min-h-[500px] xl:min-h-[800px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/corporatebgImage.png"
          alt="background"
          className="w-full h-full object-cover object-center rounded-b-[40px] xl:rounded-b-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px]">
        <Header />

        <div className="pt-16 px-4 md:p-10 xl:p-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6 lg:gap-10 lg:ml-40 xl:ml-70 lg:pt-15 xl:pt-10"
          >
            {/* Title */}
            <motion.div variants={fadeUp} className="flex flex-col gap-1 lg:gap-3 font-canela font-normal">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                Corporate
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                Wellness Programs
              </span>
            </motion.div>

            {/* Subtitle */}
            <div className="flex flex-col gap-4 md:gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm md:text-xl lg:text-2xl"
            >
              Build emotionally resilient and high-performing teams.
            </motion.span>

            {/* Description */}
            <motion.span
              variants={fadeUp}
              className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#736345]"
            >
              Happy Ho corporate programs help organizations
              <br className="hidden md:block" /> improve employee well-being,
              leadership effectiveness,
              <br className="hidden md:block" /> emotional intelligence, and
              workplace harmony.
            </motion.span>

            {/* Buttons */}
            
            <motion.span
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-2 md:gap-8 pt-8 md:mt-5"
            >
                 <Link href="/Payment">
              <Button className="w-60 md:w-60 lg:w-70 h-10 p-6 rounded-4xl bg-[#3f5c4a] text-[#e9dac9] border-1 border-yellow-400 transition-colors cursor-pointer text-sm">
                Book Corporate Consultation
              </Button>
              </Link>
            </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}