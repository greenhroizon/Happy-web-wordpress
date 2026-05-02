"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function Sessions() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="p-6 xl:p-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="flex flex-col gap-15">
        <div className="flex flex-col gap-4">
          <motion.span
            className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl"
            variants={fadeUp}
          >
            Pre-Curated Corporate Wellness Sessions
          </motion.span>
          <motion.span
            className="text-center text-sm md:text-xl xl:text-xl text-[#736345]"
            variants={fadeUp}
          >
            Experiential emotional wellness workshops designed for corporate teams.
          </motion.span>
        </div>
      </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 mx-auto max-w-[1920px] w-full">

  {/* LEFT (Techniques - 2x width) */}
  <div className="flex flex-col gap-8 w-fit">

    {/* HEADER */}
    <div className="flex justify-center">
      <div className="flex items-center gap-3 w-full max-w-xl min-w-0">
        <div className="flex-1 min-w-[20px] h-[2px] bg-[#6b5b3e]" />
        <span className="px-5 py-2 border border-[#6b5b3e] rounded-full text-[#6b5b3e] text-sm md:text-base whitespace-nowrap">
          Techniques We Use
        </span>
       <div className="flex-1 min-w-[20px] h-[2px] bg-[#6b5b3e]" />
      </div>
    </div>

    {/* GRID */}
   <div className="grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5 
  gap-5 xl:gap-8 text-center w-full max-w-xl mx-auto"
>

  {/* Item 1 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-1.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      Mindfulness <br/>practices
    </span>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-2.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      NLP<br/>Techniques
    </span>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-3.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      Meditation
    </span>
  </div>

  {/* Item 4 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-4.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      Positive <br/>Psychology
    </span>
  </div>

  {/* Item 5 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-5.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      Behavioural <br/>Interventions
    </span>
  </div>

</div>

  </div>
{/* DIVIDER */}
<div className="hidden md:block w-[3px] bg-yellow-300 self-stretch mt-5"></div>

  {/* RIGHT (Session Format - 1x width) */}
  <div className="flex flex-col gap-8 w-fit">

    {/* HEADER */}
    <div className="flex justify-center">
      <div className="flex items-center gap-3 w-full max-w-xl min-w-0">
        <div className="flex-1 min-w-[20px] h-[2px] bg-[#6b5b3e]" />
        <span className="px-10 md:px-5 py-2 border border-[#6b5b3e] rounded-full text-[#6b5b3e] text-sm md:text-base whitespace-nowrap">
          Session Format
        </span>
         <div className="flex-1 min-w-[20px] h-[2px] bg-[#6b5b3e]" />
      </div>
    </div>

    {/* GRID */}
<div className="grid 
  grid-cols-2 
  sm:grid-cols-2 
  md:grid-cols-2 
  lg:grid-cols-2 
  xl:grid-cols-3 
 gap-5 xl:gap-2 text-center w-full max-w-xl md:max-w-2xl mx-auto"
>

  {/* Item 1 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-6.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      <span className="font-semibold">4 - 5 hours</span><br/>Immersive Workshop
    </span>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-7.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      <span className="font-semibold">30 - 35</span>
      <br />
      Participants
    </span>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center gap-3">
    <div className="rounded-full">
      <img src="/corporate-2-8.svg" className="w-20 h-20 object-contain" />
    </div>
    <span className="text-[11px] text-[#544120] leading-tight">
      <span className="font-semibold">Interactive</span>
      <br />
      Practical & Engaging
    </span>
  </div>

</div>

  </div>

</div>
    </motion.div>
  );
}