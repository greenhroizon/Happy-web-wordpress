"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Trust() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

   const images = [
    "/b8.png",
    "/b7.png",
    "/b6.png",
    "/b5.png",
    "/b2.png",
    "/b1.png",
    "/b3.png",
    "/b4.png",
  ];


  return (
    <div className="bg-[#dcd8ce] p-1 pt-8 pb-8 xl:p-8 xl:pt-10 mx-auto max-w-[1920px]">
      <div className="flex flex-col mx-auto max-w-[1920px] gap-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <span className="text-center text-xl xl:text-5xl font-canela font-normal">
            Trusted by Corporate Organizations
          </span>
          <span className="text-center text-sm xl:text-lg text-[#978059] ">
            Our corporate clients range from Public Sector Undertakings to IT companies.
          </span>
        </motion.div>


         {/* <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 xl:gap-6 place-items-center w-fit mx-auto"
        >
          {[
            "/b8.png",
            "/b7.png",
            "/b6.png",
            "/b5.png",
            "/b4.png",
            "/b3.png",
            "/b1.png",
            "/b2.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center h-[100px] xl:mt-10"
            >
              <Image
                src={src}
                alt="logo"
                width={150}
                height={120}
                className="object-contain w-30"
              />
            </motion.div>
          ))}
        </motion.div> */}

        {/* Logos Grid */}
    <motion.div variants={fadeUp} className="w-full space-y-6 md:space-y-8">
      {/* Row 1 */}
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
                    alt={`logo-${i}`}
                    width={180}
                    height={120}
                    className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]
                               h-[90px] sm:h-[100px] md:h-[120px] lg:h-[140px] object-contain"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
      </div>
    </div>
  );
}