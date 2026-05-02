"use client";

import Header from "./Header";
import { motion } from "framer-motion";

export default function Journery() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-20">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/Payment-page-banner.svg"
          alt="background"
          className="w-full h-full object-cover object-center rounded-b-[40px] xl:rounded-b-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px]">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <Header />
        </motion.div>

        <div className="pt-16 px-4 md:p-10 xl:p-8 mt-15">

          {/* Container with stagger */}
          <motion.div
            className="flex flex-col gap-5 text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >

            <motion.span
              variants={fadeUp}
              className="font-canela text-2xl md:text-4xl"
            >
              Begin Your Journey Within
            </motion.span>

            <motion.div
              variants={fadeUp}
              className="flex flex-col text-lg md:text-xl text-[#736345]"
            >
              <span>
                Take the first step towards clarity, balance,
                <br className="hidden md:block" />
                and emotional wellbeing with Happy Ho.
              </span>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="mt-2 text-lg md:text-xl text-[#2f2a25]"
            >
              Safe • Confidential • Guided by Experts
            </motion.span>

          </motion.div>

        </div>
      </div>
    </div>
  );
}