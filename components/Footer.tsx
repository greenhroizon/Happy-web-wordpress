"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  // ================= Animations =================
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

  return (
    <motion.div
      className="bg-[#dcd8ce] xl:rounded-t-[110px] rounded-t-[40px] p-5 md:p-10 lg:p-16 mx-auto max-w-[1920px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col gap-10" variants={fadeUp}>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-5" variants={fadeUp}>
          {/* About */}
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl"><Link href="/AboutUs" className="cursor-pointer">About</Link></strong>
            </span>
            <div className="flex flex-col text-[#544120] text-[13px] lg:text-lg">
              <span><Link href="/AboutUs" className="cursor-pointer">Founder’s Note</Link></span>
              <span><Link href="/AboutUs#guides-section" className="cursor-pointer">
  Meet Our Guides
</Link></span>
              {/* <span>Why Happy Ho</span>
              <span>Our Approach</span>
              <span>How It Works</span> */}
            </div>
          </motion.div>

          {/* Our Programs */}
          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl"><Link href="/Programs" className="cursor-pointer">Our Programs </Link></strong>
            </span>
            <div className="flex flex-col text-[#544120] text-[13px] lg:text-lg">
                    <span><Link href="/Programs" className="cursor-pointer">For Individuals</Link></span>
              <span><Link href="/Corporate" className="cursor-pointer">For Organizations</Link></span>
              <span><Link href="/Programs" className="cursor-pointer">Signature Programs </Link></span>
              <div className="flex flex-col pl-4 text-[10px] md:text-[12px] lg:text-[16px] xl:text-lg">
                <span>• Cosmic Guidance</span>
                {/* <span className="lg:hidden">&nbsp;&nbsp; Guidance</span> */}

                <span>• Meditation Coaching</span>
                {/* <span className="lg:hidden">&nbsp;&nbsp; Coaching</span> */}

                <span>• Holistic Healing</span>
                {/* <span className="lg:hidden">&nbsp;&nbsp; Healing</span> */}
              </div>
            </div>
          </motion.div>

          {/* Content & Learning */}
          <motion.div className="flex flex-col gap-2 mt-10 md:mt-0" variants={fadeUp}>
            <span>
              <strong className="text-[#544120] text-sm lg:text-xl">Resources</strong>
            </span>
            <div className="flex flex-col text-[#544120] text-[13px] lg:text-lg">
              <span><Link href="/Resources" className="cursor-pointer">Blog</Link></span>
              <span>Videos / Reels</span>
            </div>
          </motion.div>

          {/* Footer Image */}
<motion.div
  className="mt-10 md:mt-0 flex justify-center"
  variants={fadeUp}
>
  <div className="relative w-fit">
    
    <Image
      src="/footerImage.png"
      alt="Meditation"
      width={220}
      height={220}
    />

    {/* ® symbol */}
    <span className="absolute top-0 right-5 text-4xl font-bold">
      ®
    </span>

  </div>
</motion.div>

        </motion.div>

        {/* Contact Section */}
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <span>
            <strong className="text-[#544120] text-lg lg:text-xl">Contact</strong>
          </span>
          <div className="flex flex-col gap-5">
            <motion.div className="flex flex-col text-[#544120] text-[13px] lg:text-lg" variants={fadeUp}>
              <span>
                Address – Tower 7 – 202, Ace Parkway, <br />
                Sector 150, Gautam Budh Nagar, 201310,<br />
                NOIDA, Uttar Pradesh, India (Bharat)
              </span>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 text-[#544120] xl:grid-cols-2 md:gap-15 lg:gap-30" variants={fadeUp}>
              <div className="flex flex-col text-[13px] lg:text-lg">
                <span>Mobile: (+91) 9811237999</span>
                <span>Email: info@happyho.in</span>
              </div>
              <div className="flex gap-3 mt-5 md:mt-0 md:ml-auto items-center">
              {[
                { src: "/200.png", label: "FaceBook" },
                { src: "/201.png", label: "Instagram" },
                { src: "/202.png", label: "Twitter" },
                { src: "/203.png", label: "YouTube" },
              ].map((item, i) => (
                <Image
                  key={i}
                  src={item.src}
                  alt={item.label}
                  width={100}
                  height={60}
                  className="w-6 h-6 md:w-12 md:h-12 lg:w-15 lg:h-15 object-contain"
                />
              ))}
            </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}