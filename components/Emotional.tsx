"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Emotional() {
  /* ================= Animations ================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
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

            {/* Row 1 */}
  const images = [
  "/300.png",
  "/302.png",
  "/303.png",
  "/304.png",
  "/402.png",
];
  const images1 = [
  "/400.png",
  "/304.png",
  "/402.png",
  "/403.png",
  "/302.png",
];


  return (
    <div className="mx-auto max-w-[1920px] p-1 pt-10 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* ================= Image Marquee ================= */}
        <motion.div variants={fadeUp} className="w-full space-y-4 md:space-y-6">
          
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-3 sm:gap-4 md:gap-6 w-max min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...Array(2)].map((_, repeatIndex) => (
              <div key={repeatIndex} className="flex gap-3 sm:gap-4 md:gap-6">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt={`image-${i}`}
                      width={300}
                      height={200}
                      className="w-[140px] sm:w-[160px] md:w-[240px] lg:w-[280px]
                                h-[90px] sm:h-[110px] md:h-[150px] lg:h-[180px] object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

          {/* Row 2 (reverse direction) */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6 w-max min-w-full"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-3 sm:gap-4 md:gap-6">
                   {images1.map((src, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={src}
                        alt={`image-${i}`}
                        width={300}
                        height={200}
                        className="w-[140px] sm:w-[160px] md:w-[240px] lg:w-[280px]
                                   h-[90px] sm:h-[110px] md:h-[150px] lg:h-[180px] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ================= Text ================= */}


      <div className="flex flex-col gap-1 md:gap-3">
               <motion.span
          variants={fadeUp}
          className="text-2xl md:text-4xl xl:text-5xl text-[#7a5c42] font-canela pt-5"
        >
          You don’t have to navigate this alone.
        </motion.span>

        <motion.span
          variants={fadeUp}
          className="text-[12px] md:text-2xl xl:text-3xl text-[#b56e41]"
        >
          Start building emotional resilience today.
        </motion.span>
      </div>

        {/* ================= Button ================= */}

       <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-fit cursor-pointer"
        >
          {/* Image */}
          <Link href="/Payment">
          <img
            src="/HappyHo_Corporate_Book-Corporate-Session.svg"
            alt="Book Session"
            className="w-[150px] md:w-[220px]"
          />

          {/* Text on top of image */}
          <span className="absolute inset-0 flex items-center justify-center text-[#e9dac9] text-[10px] md:text-[16px] font-medium pointer-events-none">
            Book Discovery Session
          </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}