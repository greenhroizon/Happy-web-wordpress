"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Published() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-[#3f5c4a] py-12 px-1 xl:px-16 mt-10 max-w-[1920px] min-h-[550px] md:min-h-[600px] mx-auto">
      
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-white space-y-4"
      >
        <h2 className="text-3xl xl:text-5xl font-medium">
          Published Articles
        </h2>

        <p className="text-lg xl:text-xl text-gray-200">
          Thought leadership articles published on Speaking Tree
        </p>
      </motion.div>

      {/* Cards */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex md:grid md:grid-cols-2 gap-6 mt-10 max-w-[1000px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory"
>
<motion.div
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
  className="w-[300px] md:w-[420px] flex-shrink-0 md:w-auto snap-start bg-white rounded-3xl p-6 flex gap-4 items-start"
>
            {/* Logo */}
            <Image
              src="/22.png"
              alt="logo"
              width={80}
              height={80}
              className="w-10 h-10 md:w-20 md:h-20 rounded-md hidden md:block"
            />

            {/* Content */}
            <div className="flex flex-col space-y-2  text-[#544120]">
              <div className="md:hidden flex">
                     <Image
              src="/22.png"
              alt="logo"
              width={80}
              height={80}
              className="w-10 h-10 md:w-20 md:h-20 rounded-md"
            />
                <h3 className="font-semibold text-[10px] md:text-sm">
                    Unheeded wisdom and a materialistic superpower
                </h3>
              </div>
              <h3 className="font-semibold text-[10px] md:text-sm hidden md:block">
                    Unheeded wisdom and a materialistic superpower
              </h3>

              <p className="text-[8px] md:text-[10px] leading-relaxed">
                    Spirituality has been made unnecessarily serious. Priests, monks, and moralists have turned it into a grave business, as if truth can only be reached with a long face. But existence is not serious. Existence is playful.
              </p>

              <span className="text-[8px] md:text-sm mt-5 md:mt-10 lg:mt-2">
                <Link className="cursor-pointer underline"   
                      target="_blank"
                      rel="noopener noreferrer" href="https://timesofindia.indiatimes.com/blogs/toi-edit-page/unheeded-wisdom-and-a-materialistic-superpower/">
                  Read on Speaking Tree
                </Link>
              </span>
            </div>
          </motion.div>
<motion.div
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
  className="w-[300px] md:w-[420px] flex-shrink-0 md:w-auto snap-start bg-white rounded-3xl p-6 flex gap-4 items-start"
>
            {/* Logo */}
            <Image
              src="/22.png"
              alt="logo"
              width={80}
              height={80}
              className="w-10 h-10 md:w-20 md:h-20 rounded-md hidden md:block"
            />

            {/* Content */}
            <div className="flex flex-col space-y-2  text-[#544120]">
              <div className="md:hidden flex">
                        <Image
              src="/22.png"
              alt="logo"
              width={80}
              height={80}
              className="w-10 h-10 md:w-20 md:h-20 rounded-md"
            />
                  <h3 className="font-semibold text-[10px] md:text-sm ">
             Laughter: The forgotten doorway to divinity
              </h3>

              </div>
              <h3 className="font-semibold text-[10px] md:text-sm hidden md:block">
             Laughter: The forgotten doorway to divinity
              </h3>

              <p className="text-[8px] md:text-[10px] leading-relaxed">
                When Swami Vivekananda, Paramhansa Yogananda, Osho, and AC Bhaktivedanta Swami Prabhupada arrived in US, they carried with them not merely Eastern teachings, but a corrective wisdom meant for a civilisation rising rapidly in external power yet lacking inner anchorage.
              </p>

              <span className="text-[8px] md:text-sm mt-2">
                <Link   className="cursor-pointer underline"   
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://timesofindia.indiatimes.com/blogs/toi-edit-page/laughter-the-forgotten-doorway-to-divinity/">
                           Read on Speaking Tree
                </Link>
              </span>
            </div>
          </motion.div>
      </motion.div>
    </div>
  );
}