"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

export default function Founder() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const ,
      },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <div className="px-4 pt-12 xl:px-30 xl:pt-12 mx-auto max-w-[1920px]">
      
       <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="hidden md:flex flex-col md:grid md:grid-cols-2 px-3 xl:px-5 md:px-8 lg:pl-20 xl:pl-20 2xl:pl-50 xl:gap-12 justify-center"
            >
              
              {/* LEFT CONTENT */}
              <div className="flex flex-col items-center">
                <motion.div className="flex flex-col gap-4" variants={container}>
                  
                  <motion.span
                    variants={fadeUp}
                    className="text-lg md:text-xl xl:text-2xl text-[#736345] italic"
                  >
                    A Note From Our Founder
                  </motion.span>
      
                  <motion.div className="flex flex-col xl:gap-1">
                    {[
                      "At Happy Ho, we believe",
                      "emotional well-being is not a",
                      "destination — it's a daily practice.",
                    ].map((text, i) => (
                      <motion.span
                        key={i}
                        variants={fadeUp}
                        className="text-xl md:text-xl lg:text-2xl xl:text-4xl font-canela"
                      >
                        {text}
                      </motion.span>
                    ))}
                  </motion.div>
      
                  {[
                    "In a world that moves quickly, many of us feel overwhelmed, disconnected, or unsure of how to navigate our inner lives.",
                    "Happy Ho was created to provide a space where people can slow down, understand themselves better, and develop the tools needed for lasting emotional balance.",
                    "Through coaching, meditation, and holistic guidance, our goal is to help individuals and organizations build clarity, resilience, and meaningful growth. We focus not on quick fixes, but on sustainable practices that help people live more consciously and intentionally.",
                    "Happy Ho is not just a platform — it's a community built around the belief that when we understand ourselves better, we can create healthier relationships, better workplaces, and more fulfilling lives.",
                    "Thank you for being part of this journey.",
                  ].map((para, i) => (
                    <motion.p
                      key={i}
                      variants={fadeUp}
                      className="text-sm xl:text-lg text-[#736345]"
                    >
                      {para}
                    </motion.p>
                  ))}
      
                </motion.div>
              </div>
      
              {/* RIGHT IMAGE */}
              <div className="hidden md:flex justify-center md:justify-center md:items-end xl:justify-start xl:items-end mt-10">
                <motion.div
                  variants={imageAnim}
                  className="flex flex-col items-center md:items-start gap-3 lg:mr-10"
                >
                  
                  {/* Image wrapper */}
                  <div className="w-[200px] sm:w-[240px] md:w-[330px] lg:w-[300px] xl:w-[400px]">
                    <Image
                      src="/42.png"
                      alt="Founder"
                      width={400}
                      height={500}
                      className="rounded-3xl w-full h-auto object-cover"
                      priority
                    />
                  </div>
                  {/* Name */}
                  <div className="w-full text-center md:text-right text-sm xl:text-lg text-[#7d4545]">
                    <span className="block">Jwalant Swaroop</span>
                    <span className="block italic">Founder, Happy Ho</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="block md:hidden flex flex-col md:grid md:grid-cols-2 px-3 xl:px-5 md:px-8 lg:pl-20 xl:pl-20 2xl:pl-50 xl:gap-12 justify-center"
      >
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center">
          <motion.div className="flex flex-col gap-4" variants={container}>
            
            <motion.span
              variants={fadeUp}
              className="text-lg md:text-xl xl:text-2xl text-[#736345] italic"
            >
              A Note From Our Founder
            </motion.span>

             {/* RIGHT IMAGE */}
            <div className="justify-start md:justify-center md:items-end xl:justify-start xl:items-end">
              <motion.div
                variants={imageAnim}
                className="flex flex-col items-center md:items-start gap-3 lg:mr-10"
              >
                
                {/* Image wrapper */}
                <div className="w-full">
                  <Image
                    src="/Jwalant-Swaroop.svg"
                    alt="Founder"
                    width={400}
                    height={500}
                    className="rounded-3xl w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Name */}
                <div className="w-full text-center md:text-right text-sm xl:text-lg text-[#7d4545]">
                  <span className="block">Jwalant Swaroop</span>
                  <span className="block italic">Founder, Happy Ho</span>
                </div>
              </motion.div>
            </div>

            <motion.div className="flex flex-col xl:gap-1">
              {[
                "At Happy Ho, we believe",
                "emotional well-being is not a",
                "destination — it's a daily practice.",
              ].map((text, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className="text-xl md:text-xl lg:text-2xl xl:text-4xl font-canela"
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>

            {[
              "In a world that moves quickly, many of us feel overwhelmed, disconnected, or unsure of how to navigate our inner lives.",
              "Happy Ho was created to provide a space where people can slow down, understand themselves better, and develop the tools needed for lasting emotional balance.",
              "Through coaching, meditation, and holistic guidance, our goal is to help individuals and organizations build clarity, resilience, and meaningful growth. We focus not on quick fixes, but on sustainable practices that help people live more consciously and intentionally.",
              "Happy Ho is not just a platform — it's a community built around the belief that when we understand ourselves better, we can create healthier relationships, better workplaces, and more fulfilling lives.",
              "Thank you for being part of this journey.",
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-sm xl:text-lg text-[#736345]"
              >
                {para}
              </motion.p>
            ))}

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}