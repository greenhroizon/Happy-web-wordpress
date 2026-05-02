"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GuideCard, GuideCardlarge } from "./GuideCard";

export default function Guides() {

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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div id="guides-section" className="max-w-[1920px] mx-auto pt-12 px-6 xl:p-16 pb-10">
      <div className="flex flex-col">
        
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl xl:text-5xl"
        >
          Meet Our Guides
        </motion.span>

        {/* Columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        className="hidden md:flex flex-col md:flex-row items-center justify-center gap-5 mt-20"
        >
          
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
             <GuideCard
  src="/Pooja-Chandra_HH.png"
  title="Pooja Chandra"
  desc="Conscious Guidance + Energy Healing"
/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <GuideCardlarge
      src="/44.png"
  title="Dr.Sandeep Nath"
  desc="Mindfulness + Habit Formation +
Intuition and Beliefs +
Energy-work/Jigong +
Organizational Alignment +
Executive Capacity Coaching +
Ethics-based Corporate Culture"
/>
    
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
                 <GuideCardlarge
  src="/43.png"
  title="Saumya Sharma"
  desc="Emotional Freedom Techniques (EFT) +
Matrix Reimprinting +
Family Constellation +
Somatic Experiencing"
/>

            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
                         <GuideCard
    src="/guid4.jpeg"
  title="Nonah Khanna"
  desc="Career & Health Tarot + Reiki + Aura Cleaning + Chakra balancing + Sujok + 25 other modalities"
/>
            </motion.div>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
                 <GuideCard
            src="/guid5.jpeg"
  title="Saachi Aggarwal"
  desc="Relationship Tarot +
Vastu +
Numerology +
Name Correction"
/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
                               <GuideCardlarge
             src="/42.png"
  title="Jwalant Swaroop"
  desc="Tarot aided Life, business & Career Coach + NLP + Motivational Speaker + Author"
/>
            </motion.div>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={fadeUp} className="flex md:flex-col gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCardlarge
              src="/NageshAlai_HH.png"
  title="Nagesh Alai"
  desc="Career & Business Coach + Motivational Speaker + Author"
/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCard
                src="/guid11.jpeg"
  title="Monika Shankar"
  desc="Tarot + Astrology"
/>
            </motion.div>
          </motion.div>

        </motion.div>



        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-5 mt-10 md:hidden"
        >
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCard
  src="/Pooja-Chandra_HH.png"
  title="Pooja Chandra"
  desc="Conscious Guidance + Energy Healing"
/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCardlarge
             src="/42.png"
  title="Jwalant Swaroop"
  desc="Tarot aided Life, business & Career Coach + NLP + Motivational Speaker + Author"
/>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
                <GuideCardlarge
    src="/guid4.jpeg"
  title="Nonah Khanna"
  desc="Career & Health Tarot + Reiki + Aura Cleaning + Chakra balancing + Sujok + 25 other modalities"
/>
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCard
            src="/guid5.jpeg"
  title="Saachi Aggarwal"
  desc="Relationship Tarot +
Vastu +
Numerology +
Name Correction"
/>
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
               <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCardlarge
      src="/44.png"
  title="Dr.Sandeep Nath"
  desc="Mindfulness + Habit Formation +
Intuition and Beliefs +
Energy-work/Jigong +
Organizational Alignment +
Executive Capacity Coaching +
Ethics-based Corporate Culture"
/>
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }}>
                <GuideCard
  src="/43.png"
  title="Saumya Sharma"
  desc="Emotional Freedom Techniques (EFT) +
Matrix Reimprinting +
Family Constellation +
Somatic Experiencing"
/>
            </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
               <GuideCard
              src="/NageshAlai_HH.png"
  title="Nagesh Alai"
  desc="Career & Business Coach + Motivational Speaker + Author"
/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
                 <GuideCardlarge
                src="/guid11.jpeg"
  title="Monika Shankar"
  desc="Tarot + Astrology"
/>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}