"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const programs = [
  { title: "Executive\nCoaching", image: "/24.png", desc: "Guidance for leaders and professionals to develop clarity, emotional intelligence, and strategic decision-making." },
  { title: "Happiness\nCoaching", image: "/11.png", desc: "Discover practical tools to overcome stress and build a more joyful and balanced life." },
  { title: "Life\nCoaching", image: "/12.png", desc: "Support for personal growth, goal clarity, and meaningful life direction." },
  { title: "Relationship\nCoaching", image: "/13.png", desc: "Build deeper connections through improved communication, emotional awareness, and conscious relationship practices." },
  { title: "Tarot\nGuidance", image: "/14.png", desc: "Gain clarity and direction through intuitive tarot sessions focused on reflection and self-discovery." },
  { title: "Guided\nMindfulness", image: "/18.png", desc: "Structured sessions that teach present-moment awareness and emotional regulation." },
  { title: "Energy\nHealing", image: "/15.png", desc: "Holistic practices that support emotional release and energetic balance." },
  { title: "Emotional\nBalance", image: "/16.png", desc: "Workshops focused on understanding emotions and building inner resilience." },
  { title: "Holistic\nWellbeing", image: "/17.png", desc: "Integrated approaches combining mindfulness, coaching, and healing practices." },
];

export default function Explore() {
  // Animations
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut"  as const},
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

  return (
    <div className="px-4 pt-8 xl:p-8 pb-10">
      <div className="flex flex-col gap-10 xl:gap-15 mx-auto max-w-[1920px]">
        
        {/* Heading */}
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-xl md:text-3xl xl:text-5xl"
        >
          Explore Our Programs
        </motion.span>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 md:gap-x-6  xl:gap-y-6 xl:gap-x-6 max-w-[1000px] mx-auto w-full justify-items-center"
        >
          {programs.map((program:any, index:number) => (
            
           <motion.div
  key={program.title}
  variants={fadeUp}
  whileTap={{ scale: 0.97 }}
  className="w-full"
  onClick={() =>
    setActiveIndex(activeIndex === index ? null : index)
  }
>
             <Card className="group relative w-full h-35 md:h-65 rounded-2xl border p-4 flex flex-col items-center justify-center text-center transition-all duration-300 bg-[#f3efe8] border-[#3d3020] overflow-hidden">

  {/* Default Content */}
  <div
  className={`
    flex flex-col items-center justify-center gap-2 transition-all duration-300
    xl:group-hover:opacity-0 xl:group-hover:scale-95
    ${activeIndex === index ? "opacity-0 scale-95" : "opacity-100"}
  `}
>
    
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src={program.image}
        alt={program.title}
        width={130}
        height={130}
        className="w-15 h-15 md:w-35 md:h-35"
      />
    </motion.div>

    <span className="text-sm md:text-2xl whitespace-pre-line mt-2">
      {program.title}
    </span>
  </div>

  {/* Hover Content */}
<div
  className={`
    absolute inset-0 bg-[#907351] flex flex-col items-center justify-center px-2 md:px-6
    transition-all duration-300 gap-2 md:gap-4
    xl:opacity-0 xl:group-hover:opacity-100
    ${activeIndex === index ? "opacity-100" : "opacity-0"}
  `}
>
  
  <span className="text-sm md:text-2xl whitespace-pre-line text-white">
    {program.title}
  </span>

  <p className="text-[8px] md:text-sm text-white">
    {program.desc}
  </p>

</div>

</Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}