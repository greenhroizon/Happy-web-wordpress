"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Featured() {
  return (
    <motion.div
      className="pt-8 px-6 xl:p-16 max-w-[1200px] mx-auto"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl xl:text-5xl text-center mb-10"
      >
        Featured Insights
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT BIG CARD */}
        <motion.div variants={fadeUp}>
          <Card className="rounded-3xl overflow-hidden bg-[#e9e1d6] p-0 h-95 md:h-100 lg:h-120 text-[#978059]">
            <div>
              <Image
                src="/65.png"
                alt="anger"
                width={800}
                height={400}
                className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover"
              />
            </div>

            <div className="px-5 space-y-6">
              <div className="flex flex-col gap-6 md:gap-4 lg:gap-6">
                <h3 className="text-sm lg:text-xl">
                  Anger When Transformed Is Love
                </h3>

                <p className="text-[10px]">
                  Author: Jwalant Swaroop <br />
                  Published: May 24, 2021
                </p>

                <p className=" text-[10px] lg:text-sm">
                  Anger is often seen as a destructive emotion, but it can also be a powerful form of energy.
                </p>
              </div>

              <span className="font-medium cursor-pointer text-[10px] lg:text-sm">
                Read Article →
              </span>
            </div>
          </Card>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* TOP RIGHT CARD */}
          <motion.div variants={fadeUp}>
            <Card className="px-4 lg:px-5 rounded-3xl bg-[#e9e1d6] w-full h-50 md:h-44 lg:h-54 text-[#978059]">
              <h3 className="text-sm lg:text-lg">
                How is Happiness different to Pleasure
              </h3>

              <p className="text-[10px]">
                Author: Jwalant Swaroop <br />
                Published: March 19, 2022
              </p>

              <p className="text-[10px] lg:text-sm">
                Scientists have long studied the <br />
                mechanisms of desire, happiness, and <br />
                pleasure in the brain.
              </p>

              <span className="font-medium cursor-pointer text-[10px] lg:text-sm">
                Read Article →
              </span>
            </Card>
          </motion.div>

          {/* BOTTOM RIGHT CARD */}
          <motion.div variants={fadeUp}>
            <Card className="rounded-3xl overflow-hidden bg-[#e9e1d6] text-[#978059] md:h-50 xl:w-full h-60 lg:h-60 p-0">
              <div>
                <Image
                  src="/66.png"
                  alt="anger"
                  width={800}
                  height={400}
                  className="w-full md:h-[150px] h-[190px] lg:h-[190px] object-cover"
                />
              </div>

              <div className="px-5">
                <span className="font-medium cursor-pointer text-[10px] lg:text-sm">
                  Read Article →
                </span>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}