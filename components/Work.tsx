
"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Work() {
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
    <div className="p-6 pt-8 xl:p-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-6 xl:gap-15 mx-auto max-w-[1920px] items-center"
      >
        <motion.span variants={fadeUp} className="text-center text-xl xl:text-6xl">
          How Our Corporate Programs Work
        </motion.span>

        <motion.div variants={fadeUp} className="flex flex-col text-center md:flex-row gap-10 xl:gap-40">
          <div className="flex gap-3 text-[#736345] ">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3f5c4a] rounded-full text-white text-xl flex justify-center items-center"> 1</div>
              <div className="flex flex-col text-left">
                <span className="text-lg md:text-xl xl:text-3xl">Corporate Discovery Call</span>
                <span className="text-sm xl:text-xl">Understanding your organization's goals,</span>
                <span className="text-sm xl:text-xl">challenges, and team structure.</span>
              </div>
          </div>
          <div className="flex gap-3 text-[#736345]">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3f5c4a] rounded-full text-white text-xl flex justify-center items-center"> 2</div>
              <div className="flex flex-col text-left">
                <span className="text-lg md:text-xl xl:text-3xl">Program Design</span>
                <span className="text-sm xl:text-xl">Customized coaching, mindfulness, or</span>
                <span className="text-sm xl:text-xl">wellness workshops tailored for your Team.</span>
              </div>
          </div>
        </motion.div>

         <motion.div variants={fadeUp}  className="flex text-left gap-3 text-[#736345]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3f5c4a] rounded-full text-white text-xl flex justify-center items-center">3</div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl xl:text-3xl">Implementation</span>
              <span className="text-sm xl:text-xl">Live workshops, coaching sessions,</span>
              <span className="text-sm xl:text-xl">and guided programs for employees.</span>
            </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2 text-center mt-10">
          <span className="text-xl md:text-2xl xl:text-5xl text-[#77510f] font-canela font-normal">
            Build a Happier, Healthier Workplace
          </span>

          <div className="flex flex-col gap-1 text-[#7d4545]">
            <span className="text-sm md:text-xl xl:text-xl">
              Empower your teams with mindfulness, emotional intelligence,<br className="hidden md:block"/> and resilience training.
            </span>
          </div>

          <div className="flex items-center justify-center mt-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-[250px] md:w-[300px] lg:w-[350px] cursor-pointer"
            >
                <Link href="/Payment">
              {/* Image */}
              <img
                src="/HappyHo_Corporate_Book-Corporate-Session.svg"
                alt="Book Corporate Consultation"
                className="w-full h-[48px] object-contain"
              />

              {/* Text overlay */}
              <span className="absolute inset-0 flex items-center justify-center text-[#e9dac9] text-[12px] font-medium pointer-events-none">
                Book Corporate Consultation
              </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}