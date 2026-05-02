"use client";

import { motion } from "framer-motion";

export default function Happy() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-[#3f5c4a] p-4 mt-8 mx-auto max-w-[1920px]">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-2 text-white text-left md:text-center md:items-center md:justify-center"
      >
        
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-[#9ead8c] font-canela"
        >
          What makes Happy Ho different
        </motion.div>

        {/* Paragraph lines */}
       <motion.div className="flex flex-col text-sm md:text-2xl text-left md:text-center">
        <motion.span variants={fadeUp}>
          Many wellness platforms offer inspiration or quick advice. <br className="lg:block hidden"/>
           Happy Ho focuses on building sustainable habits that help <br className="lg:block hidden"/>
          people navigate emotions, relationships, and personal growth <br className="lg:block hidden"/>
          more intentionally.
        </motion.span>
      </motion.div>

      </motion.div>
    </div>
  );
}