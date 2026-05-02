"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
export default function Designed() {

  const scrollRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState(0);


  const stats = [
    { value: "1K+", label1: "Customers", label2: "Worldwide" },
    { value: "20+", label1: "Awards &", label2: "Honours" },
    { value: "521+", label1: "Workshops", label2: "\u00A0" },
    { value: "22+", label1: "Retreats", label2: "\u00A0" },
  ];


const handleScroll = () => {
  if (!scrollRef.current) return;
  const { scrollLeft, offsetWidth } = scrollRef.current;
  setActiveIndex(Math.round(scrollLeft / offsetWidth));
};

  /* ================= Animations ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
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

  return (
    <div className="mx-auto max-w-[1920px] pt-8 px-4 md:p-10 xl:p-8">
      <div className="flex flex-col gap-5 lg:gap-15 items-center justify-center">

        {/* ================= Stats Section ================= */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-4 items-center justify-center w-fit"
>

  {/* Item 1 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-5xl text-[#544120]">
        1K+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Customers</span>
        <span className="text-sm md:text-xl text-[#c39e86]">Worldwide</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 2 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        20+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Awards &</span>
        <span className="text-sm md:text-xl text-[#c39e86]">Honours</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 3 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center lg:border-r-2 lg:border-[#D4A437]">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        521+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Workshops</span>
        <span className="text-sm md:text-xl text-[#c39e86]">&nbsp;</span>
      </motion.div>
    </div>
  </motion.div>

  {/* Item 4 */}
  <motion.div variants={fadeUp} className="flex items-center justify-center">
    <div className="flex flex-col gap-4 lg:px-10 text-center">
      <motion.strong variants={fadeUp} className="text-4xl md:text-7xl lg:text-6xl text-[#544120]">
        22+
      </motion.strong>
      <motion.div variants={fadeUp} className="flex flex-col">
        <span className="text-sm md:text-xl text-[#c39e86]">Retreats</span>
        <span className="text-sm md:text-xl text-[#c39e86]">&nbsp;</span>
      </motion.div>
    </div>
  </motion.div>

</motion.div>
        {/* ================= Heading ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <span className="text-xl md:text-4xl lg:text-5xl">
            Designed Around Your Needs
          </span>
        </motion.div>

        {/* ================= Cards ================= */}

<motion.div
  ref={scrollRef}
  onScroll={handleScroll}
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex overflow-x-auto xl:overflow-x-visible md:grid md:grid-cols-3 gap-6 md:gap-6 md:w-fit mt-3 w-full scrollbar-hide snap-x snap-mandatory md:snap-none"
>
  {["/2000.png", "/2001.png", "/2002.png"].map((img, i) => (
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
{/* <motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="hidden xl:grid grid-cols-3 gap-6 mt-3 w-full justify-center"
>
  {["/card1.png", "/card2.png", "/card3.png"].map((img, i) => (
    <motion.div
      key={i}
      variants={fadeUp}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      className="relative w-full aspect-[3/4]"
    >
      <Image
        src={img}
        alt=""
        fill
        className="object-contain rounded-4xl"
      />
    </motion.div>
  ))}
</motion.div> */}
        {/* ================= Therapy Formats ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <span className="text-xl md:text-4xl lg:text-5xl">
            Therapy Formats
          </span>
        </motion.div>

        {/* <motion.div 
            variants={stagger}
          initial="hidden"
          whileInView="show"
          className="md:hidden block flex">
             <Link href="/Programs" className="cursor-pointer">
          <img
          src="/80.png"
          alt="individual"
          className="w-40 h-40"
          
          />
          </Link>
               <Link href="/Corporate" className="cursor-pointer">
           <img
          src="/81.png"
          alt="individual"
          className="w-40 h-40"
          
          />
          </Link>
        </motion.div> */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3"
        >

          {/* Card 1 */}
          <motion.div variants={fadeUp}  whileTap={{ scale: 0.97 }} >
            <Card className="bg-[#907351] rounded-4xl border-2 border-yellow-400 w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <Link href="/Programs" className="cursor-pointer">
              <motion.div 
                  initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
              className="flex justify-end">
                <Image src="/6.png" alt="" width={200} height={200} />
              </motion.div>

              <div className="flex flex-col gap-4 text-[#e9dac9] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Individuals
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Personal coaching, meditation guidance, emotional wellness support,
                  relationship clarity, life direction, healing work.
                </div>
              </div>
              </Link>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp}  whileTap={{ scale: 0.97 }} >
            <Card className="bg-transparent rounded-4xl border-2 border-[#544120] w-full h-full lg:max-w-xl flex flex-col p-6 sm:p-8">
              <Link href="/Corporate" className="cursor-pointer">
              <motion.div 
                initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}className="flex justify-end">
                <Image src="/intro.png" alt="" width={125} height={200} />
              </motion.div>

              <div className="flex flex-col gap-4 text-[#544120] mt-4">
                <strong className="text-2xl sm:text-2xl lg:text-4xl">
                  For Organizations
                </strong>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Corporate wellness programs, executive coaching, happiness measurement, emotional intelligence training, mentoring, leadership development.
                </div>
              </div>
              </Link>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}



          // {[ 
          //   { img: "/68.png", title: "Consciousness Guidance", bg: "#dcd8ce" },
          //   { img: "/69.png", title: "Meditation Coaching", bg: "#7d7d83" },
          //   { img: "/70.png", title: "Holistic Healing", bg: "#3f5c4a" },