"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function Coaching(){
const scrollRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState(0);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


        const stagger = {
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
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };
 const handleScroll = () => {
  if (!scrollRef.current) return;
  const { scrollLeft, offsetWidth } = scrollRef.current;
  setActiveIndex(Math.round(scrollLeft / offsetWidth));
};

  return(
    <div className="px-4 pt-8 xl:p-8 pb-10">
      
      {/* 🔹 Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 xl:gap-6"
      >
        <motion.span
          variants={fadeUp}
          className="text-center text-xl md:text-2xl xl:text-4xl font-canela font-normal"
        >
          Programs designed for emotional <br className="block md:hidden"/>clarity and growth
        </motion.span>

        <motion.span
          variants={fadeUp}
          className="text-center text-[10px] md:text-sm xl:text-xl text-[#736345]"
        >
          Happy Ho offers a range of coaching, meditation, counselling, and healing programs
          <br className="md:block hidden"/>
          designed for individuals, professionals, and organizations. These programs integrate
          <br className="md:block hidden"/>
          positive psychology, ancient wisdom, and practical coaching tools to improve well-
          <br className="md:block hidden"/>
          being, creativity, productivity, and resilience.
        </motion.span>
      </motion.div>

       <motion.div
             ref={scrollRef}
             onScroll={handleScroll}
             variants={stagger}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="flex overflow-x-auto xl:overflow-x-visible md:grid md:grid-cols-3 gap-6 md:gap-6 md:mx-auto md:w-fit mt-10 w-full scrollbar-hide snap-x snap-mandatory md:snap-none md:justify-center"
           >
             {["/1500.png", "/1501.png", "/1502.png"].map((img, i) => (
               <motion.div
             key={i}
             variants={fadeUp}
             whileTap={{ scale: 0.97 }}
             whileHover={{ scale: 1.03 }}
             className="min-w-full md:min-w-0 flex-shrink-0 md:flex-shrink md:w-full snap-center md:snap-align-none"
           >
             <Image
               src={img}
               alt=""
               width={400}
               height={300}
               className="w-full md:h-[250px] xl:h-[350px] object-contain rounded-3xl"
             />
           </motion.div>
             ))}
           </motion.div>
           <div className="flex justify-center items-center gap-2 mt-3 md:hidden">
             {[0, 1, 2].map((dot) => (
               <div
                 key={dot}
                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                   activeIndex === dot ? "bg-blue-500 scale-110" : "bg-gray-400"
                 }`}
               />
             ))}
           </div>

      
    </div>
  );
}




