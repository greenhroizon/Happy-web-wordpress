"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function Growth() {


    const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const cards = [
    {
      title: "Clarity",
      img: "/5.png",
      desc: "Understanding your thoughts, emotions, and patterns is the first step toward meaningful change.",
    },
    {
      title: "Balance",
      img: "/3.png",
      desc: "We help you develop emotional stability so you can respond to life with presence rather than overwhelm.",
    },
    {
      title: "Practice",
      img: "/9.png",
      desc: "Lasting well-being is built through small daily practices that strengthen resilience and self-awareness.",
    },
  ];

 const handleScroll = () => {
  if (!scrollRef.current) return;
  const { scrollLeft, offsetWidth } = scrollRef.current;
  setActiveIndex(Math.round(scrollLeft / offsetWidth));
};


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
  // ✅ Child animation (fade + slide up)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const},
    },
  };


  return (
    <div className="px-4 pt-8 xl:p-8 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-5 mt-10">

        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <motion.span
            variants={fadeUp}
            className="text-3xl xl:text-5xl text-center"
          >
            Our Philosophy
          </motion.span>

          <motion.span
            variants={fadeUp}
            className="text-[#c39e86] text-center text-xl xl:text-4xl"
          >
            Growth through awareness and practice
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
       {["/1000.png", "/1001.png", "/1002.png"].map((img, i) => (
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
         className="w-full md:h-[260px] xl:h-[350px] object-contain rounded-3xl"
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
    </div>
  );
}