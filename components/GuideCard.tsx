"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface data{
    src:string,
    title:string,
    desc:string
}

export function GuideCard({ src, title, desc }:data) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => setActive(!active)}
      className="relative group cursor-pointer"
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={200}
        height={200}
        className="rounded-[60px] w-[200px] h-[200px] object-cover"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 rounded-[60px]
          bg-black/60 flex flex-col items-center justify-center text-center px-4
          transition-all duration-300
          
          opacity-0 group-hover:opacity-100   /* desktop hover */
          ${active ? "opacity-100" : ""}      /* mobile click */
        `}
      >
        <h3 className="text-white font-semibold text-sm md:text-lg">{title}</h3>
        <p className="text-white text-[10px] md:text-sm mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}


export function GuideCardlarge({ src, title, desc }:data) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => setActive(!active)}
      className="relative group cursor-pointer"
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={200}
        height={200}
        className="rounded-[60px] w-[200px] h-[300px] object-cover"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 rounded-[60px]
          bg-black/60 flex flex-col items-center justify-center text-center px-4
          transition-all duration-300
          
          opacity-0 group-hover:opacity-100   /* desktop hover */
          ${active ? "opacity-100" : ""}      /* mobile click */
        `}
      >
        <h3 className="text-white font-semibold text-sm md:text-lg">{title}</h3>
        <p className="text-white text-[10px] md:text-sm mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}