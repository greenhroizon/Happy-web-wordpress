
"use client"

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { article } from "framer-motion/client";

export default function Articles() {
  const categories = [
    "Spirituality & Wellbeing",
    "Positive Psychology",
    "Mindfulness & Meditation",
    "Applied Philosophy",
  ];

  
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
  const articles = [
    {
      title: "Healing is Important for Emotional Wellness",
      desc: "This article features an interaction with Naman Khanna, a globally recognized healer and Reiki practitioner.",
      img: "/67.png",
    },
    {
      title: "Power of Affirmations",
      desc: "Affirmations are powerful statements that influence our thoughts and beliefs.",
      img: "/68.png",
    },
    {
      title: "We Rise by Lifting Others",
      desc: "Helping others is a powerful virtue that does not require special skills.",
      img: "/69.png",
    },
  ];

  return (
    <div className="p-6 xl:p-8  max-w-[1200px] mx-auto">
      
      {/* Title */}
      <h2 className="text-3xl xl:text-5xl text-center mb-8">
        Explore Articles
      </h2>

      {/* Category Pills */}
     {/* Scrollable buttons on small/medium */}
<div className="w-full py-2 lg:hidden overflow-x-auto no-scrollbar">
  <div className="flex gap-2 min-w-max justify-start px-4">
    {categories.map((cat, i) => (
      <Button
        key={i}
        variant={i === 0 ? "default" : "outline"}
        className="flex-shrink-0 rounded-full border-[#544120] px-6 py-3 xl:px-13 xl:py-7 text-[10px] xl:text-sm hover:bg-[#544120] text-black hover:text-white bg-transparent"
      >
        {cat}
      </Button>
    ))}
  </div>
</div>

{/* Buttons on large screens (no scroll) */}
<div className="flex flex-wrap justify-center items-center gap-2 mb-10 w-full hidden lg:flex">
  {categories.map((cat, i) => (
    <Button
      key={i}
      variant={i === 0 ? "default" : "outline"}
      className="rounded-full border-[#544120] px-6 py-3 xl:px-13 xl:py-7 text-[10px] xl:text-sm hover:bg-[#544120] text-black hover:text-white bg-transparent"
    >
      {cat}
    </Button>
  ))}
</div>

    <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-0"
>
    <motion.div
      variants={fadeUp}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      className="w-full sm:w-[48%] lg:w-[31%]"
    >
      <Card className="flex flex-col overflow-hidden rounded-3xl bg-[#e9e1d6] hover:shadow-xl transition-all h-full">
        
        <Image
          src={articles[0].img}
          alt={articles[0].title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />

        <CardContent className="p-2 px-4 space-y-3 text-[#544120]">
          <h3 className="text-sm font-semibold">{articles[0].title}</h3>
          <p className="text-[10px]">{articles[0].desc}</p>
          <span className="text-sm font-medium cursor-pointer hover:underline">
            Read Article →
          </span>
        </CardContent>
      </Card>
    </motion.div>
    <motion.div
  variants={fadeUp}
  whileTap={{ scale: 0.97 }}
  whileHover={{ scale: 1.03 }}
  className="w-full sm:w-[48%] lg:w-[31%]"
>
  <Card className="flex flex-col overflow-hidden rounded-3xl bg-[#e9e1d6] hover:shadow-xl transition-all h-full">
    
    <Image
      src={articles[1].img}
      alt={articles[1].title}
      width={400}
      height={250}
      className="w-full h-[200px] object-cover"
    />

    {/* 👇 make this flex column */}
    <CardContent className="flex flex-col justify-between flex-1 px-4 py-3 text-[#544120]">
      
      {/* Top content */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">{articles[1].title}</h3>
        <p className="text-[10px]">{articles[1].desc}</p>
      </div>

      {/* Bottom CTA */}
      <span className="text-sm font-medium cursor-pointer hover:underline mt-4">
        Read Article →
      </span>

    </CardContent>
  </Card>
</motion.div>
   <motion.div
  variants={fadeUp}
  whileTap={{ scale: 0.97 }}
  whileHover={{ scale: 1.03 }}
  className="w-full sm:w-[48%] lg:w-[31%]"
>
  <Card className="flex flex-col overflow-hidden rounded-3xl bg-[#e9e1d6] hover:shadow-xl transition-all h-full">
    
    <Image
      src={articles[2].img}
      alt={articles[2].title}
      width={400}
      height={250}
      className="w-full h-[200px] object-cover"
    />

    {/* 👇 make this flex column */}
    <CardContent className="flex flex-col justify-between flex-1 px-4 py-3 text-[#544120]">
      
      {/* Top content */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">{articles[2].title}</h3>
        <p className="text-[10px]">{articles[2].desc}</p>
      </div>

      {/* Bottom CTA */}
      <span className="text-sm font-medium cursor-pointer hover:underline mt-4">
        Read Article →
      </span>

    </CardContent>
  </Card>
</motion.div>
</motion.div>
    </div>
  );
}