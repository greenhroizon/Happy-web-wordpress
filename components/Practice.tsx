"use client";

import Link from "next/link";
import Header from "./Header";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Practice() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative z-10 mx-auto max-w-[1920px] pb-20 min-h-[400px] md:min-h-[500px] xl:min-h-[700px]"> 
      {/* Background image */}
         <div className="absolute inset-0">
           <img src="/Assets1.png" className="w-full h-full object-cover object-center rounded-b-[40px] xl:rounded-b-[80px]" />
           
        {/* <img
          src="/homebackground-image.png"
          alt="background"
          className="w-full h-full object-cover object-bottom r"
        /> */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <div className="pt-16 px-4 md:p-10 xl:p-8">
          <div className="flex flex-col md:gap-6 xl:gap-10">

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col md:gap-3 font-canela"
            >
              <motion.span
                variants={fadeUp}
                className="text-center grid grid-cols-4"
              >
                <span className="col-span-3">
                  <span className="text-2xl md:text-5xl lg:text-5xl xl:text-6xl">
                    Happiness is a skill
                  </span>
                </span>
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-center grid grid-cols-6"
              >
                <span></span>
                <span className="text-2xl md:text-5xl lg:text-5xl xl:text-6xl col-span-5 md:col-span-5 lg:col-span-5">
                  We help you practice it.
                </span>
                <span></span>
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2 text-[#736345] text-[10px] pt-4 sm:text-sm md:text-xl xl:text-2xl items-center"
            >
              <span className="lg:grid lg:grid-cols-8 ml-8 min-[375px]:ml-12 min-[425px]:ml-16">
                <span></span>
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:ml-auto md:col-span-5 lg:col-span-6 xl:col-span-5"
                >
                  Happy Ho is a modern emotional wellness and 
                  life coaching <br className="hidden md:block"/> platform designed to help individuals 
                  and organization <br className="hidden md:block"/> build clarity, resilience, balance, 
                  and conscious growth
                </motion.span>
              </span>

              <span className="md:grid md:grid-cols-3 ml-15 md:ml-45 min-[375px]:ml-22 min-[425px]:ml-30">
                <span className="hidden md:block"></span>
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="items-center md:col-span-4"
                >
                  Through coaching, meditation, consulting, and <br className="hidden lg:block"/> 
                  transformative programs, we guide you toward 
                  sustainable <br className="hidden lg:block"/> happiness — at home,at work, and 
                  within yourself.
                </motion.span>
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-2 md:gap-10 pt-8"
            >
              <div className="ml-auto">
                  <Link href="/Payment" className="cursor-pointer">
                   <Button className="bg-[#544120] cursor-pointer hover:bg-[#978059] px-4 py-2 text-[10px] md:px-10 md:py-6 md:text-lg rounded-full">
                  Start Your Journey
                </Button>
                </Link>
               
              </div>

              <div>
                 <Link href="/Programs" className="cursor-pointer">
                <Button className="border-black cursor-pointer hover:text-white hover:bg-[#978059] bg-transparent text-black px-4 py-2 text-[10px] md:px-10 md:py-6 md:text-lg rounded-full">
                  Explore Services
                </Button>
                  </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}