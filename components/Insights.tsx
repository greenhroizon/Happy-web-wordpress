"use client"

import { motion } from "framer-motion";
export default function Insights(){

    const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
    return(
        <motion.div 
           variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
        className="pt-8 px-6 xl:p-8 mx-auto max-w-[1920px]">
            <div className="flex flex-col gap-8">
                <motion.div    variants={fadeUp} className="text-xl md:text-2xl xl:text-5xl text-center font-canela font-normal">Insights for a More Conscious Life</motion.div>
               <motion.span
                    variants={fadeUp}
                    className="flex flex-col gap-2 md:gap-5 text-[10px] md:text-lg xl:text-xl md:items-center text-[#736345]">
                    <span className="flex flex-col text-left md:text-left md:grid md:grid-grid-4 xl:grid-cols-2">
                        <span className="xl:hidden block"></span>
                         <motion.span
                            variants={fadeUp}className="flex flex-col md:col-span-2 xl:col-span-1">
                            <span>Explore ideas from psychology, mindfulness,</span>
                            <span>spiritual philosophy and emotional wellness.</span>
                        </motion.span>
                        <span></span>
                    </span>
                      <motion.span
                        variants={fadeUp}
                        className="text-center md:text-left md:grid md:grid-cols-4">
                        <span></span>
                        <span className="flex flex-col md:justify-start md:col-span-3 lg:col-span-3 ml-auto">
                            <span>Articles that help you understand the mind, develop <br/> resilience, and live with clarity.</span>
                        </span>
                        <span></span>
                    </motion.span>
                </motion.span>
            </div>
        </motion.div>
    );
}