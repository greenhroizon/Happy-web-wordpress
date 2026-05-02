"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What do coaching, counselling, and healing focus on?",
      answer:
        "They focus on personal growth, emotional balance, and helping you overcome life challenges with clarity and confidence.",
    },
    {
      question: "How is coaching different from counselling?",
      answer:
        "Coaching focuses on achieving future goals, while counselling often helps process past experiences and emotional challenges.",
    },
    {
      question: "When can I expect to see results?",
      answer:
        "Results vary for each individual, but many people start noticing clarity and positive shifts within a few sessions.",
    },
    {
      question: "What happens in a meditation session?",
      answer:
        "You will be guided through breathing, awareness, and relaxation techniques that help calm the mind and improve focus.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ================= Animations ================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-8 px-4 xl:p-8 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-10">

        {/* ================= Heading ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-xl md:text-3xl xl:text-3xl text-[#c39e86]">
            Frequently Asked Questions
          </p>
          <h2 className="text-xl md:text-3xl xl:text-4xl mt-2 font-canela">
            Clarity Before You Begin
          </h2>
        </motion.div>

        {/* ================= FAQ Card ================= */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex justify-center"
>
  <Card className="w-full max-w-6xl border-2 border-[#c39e86] bg-[#f3efe8] rounded-xl pb-0 pt-0 min-h-[50px] justify-center gap-0">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border-b-2 border-[#c39e86] py-4 last:border-none px-3 justify-center"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-lg md:text-2xl 2xl:text-3xl flex justify-between items-center"
                >
                  {faq.question}

                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg md:text-xl 2xl:text-2xl cursor-pointer"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer Animation */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className=" text-gray-700 leading-relaxed text-sm md:text-lg 2xl:text-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </Card>
        </motion.div>
      </div>
    </div>
  );
}