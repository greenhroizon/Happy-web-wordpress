"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clarity() {

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
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };

  return (
    <div className="bg-[#3f5c4a] pt-8 px-6 p-8 mt-8 mx-auto max-w-[1920px] justify-center items-center">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:mt-5 md:grid md:grid-cols-6 items-center text-white max-w-5xl mx-auto gap-4 justify-center"
      >

        {/* LEFT → End comma (middle) */}
        <motion.div
          variants={fadeUp}
          className="flex justify-start items-start h-full ml-auto -mt-15 md:block hidden"
        >
          <Image
            src="/start-comma.png"
            alt="comma"
            width={120}
            height={120}
          />
        </motion.div>

        {/* CENTER → TEXT */}
        <motion.div
          variants={fadeUp}
          className="text-left flex flex-col md:gap-0 md:col-span-3 lg:col-span-4"
        >
          <span className="text-4xl md:text-2xl lg:text-4xl">
            Clarity replaced confusion.
          </span>
          <span className="text-4xl md:text-2xl lg:text-4xl">
            Structure made the difference
          </span>

          <span className="mt-4 text-2xl lg:text-2xl md:text-xl text-right opacity-80">
            — Jwalant Swaroop
          </span>
        </motion.div>

        {/* RIGHT → Start comma (top) */}
        <motion.div
          variants={fadeUp}
          className="pt-8 -ml-5 h-full md:block hidden"
        >
          <Image
            src="/end-comma.png"
            alt="comma"
            width={120}
            height={120}
          />
        </motion.div>

      </motion.div>
    </div>
  );
}