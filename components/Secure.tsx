"use client"

import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState,useRef } from "react";
import { motion } from "framer-motion";
import BookingDetailsForm from "./BookingDetailsForm";
export default function Secure() {
const [activeBooking, setActiveBooking] = useState<{ guide: string; serviceName: string } | null>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut"  as const},
  },
};

const services = [
  { name: "Tarot Guidance",     detail: "30 mins • ₹3,000",  img: "/Happy Ho_Payments_Tarot Guidance.svg",       hasSessionSelect: false, guides: ["Jwalant S.", "Nona", "Saachi A.", "Monika S."], sessions: [] },
  { name: "Energy Healing",     detail: "45 mins • ₹10,000", img: "/Happy Ho_Payments_Energy Healing.svg",       hasSessionSelect: false, guides: ["Pooja", "Nona", "Monika"],                      sessions: [] },
  { name: "Astrology",          detail: "30 mins • ₹4,500",  img: "/Happy Ho_Payments_Astrology.svg",            hasSessionSelect: false, guides: ["Monika"],                                       sessions: [] },
  { name: "Numerology",         detail: "₹15,000",           img: "/Happy Ho_Payments_Numerology.svg",           hasSessionSelect: false, guides: ["Saachi A."],                                    sessions: [] },
  { name: "Name Correction",    detail: "₹15,000",           img: "/Happy Ho_Payments_Name Correction.svg",      hasSessionSelect: false, guides: ["Saachi A."],                                    sessions: [] },
  { name: "Conscious Guidance", detail: "₹15,000",           img: "/Happy Ho_Payments_Conscious Guidance.svg",   hasSessionSelect: false, guides: ["Pooja"],                                        sessions: [] },
  { name: "Meditation",         detail: "",                  img: "/Happy Ho_Payments_Meditation.svg",           hasSessionSelect: true,  guides: ["Jwalant S.", "Nagesh", "Dr Sandeep A"],            sessions: ["Single Session: ₹5,000", "5 Sessions: ₹25,000", "10 Sessions: ₹45,000"] },
  { name: "Vastu",              detail: "",                  img: "/Happy Ho_Payments_Vastu.svg",                hasSessionSelect: true,  guides: ["Saachi A."],                                    sessions: ["Site Visit: ₹11,000", "Detailed Report: ₹40,000"] },
];
  const [selectedGuides, setSelectedGuides] = useState<string[]>(
  services.map(() => "")
);

  const [selectedSessions,  setSelectedSessions] = useState<string[]>(
  services.map(() => "")
);

  return (
    <div className="p-4 pt-8 md:p-8 lg:p-8 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-8">

        {/* Progress Steps */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4 text-xl overflow-x-auto py-2"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {["Service", "Guide", "Details", "Payment"].map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 shrink-0">
                <div className="w-6 h-6 lg:w-10 lg:h-10 bg-[#dcd8ce] rounded-full flex items-center justify-center text-white text-xs lg:text-lg font-bold">
                  {i + 1}
                </div>
                <span className="text-[#736345] text-sm md:text-xl xl:text-3xl whitespace-nowrap">{label}</span>
              </div>
              {i < 3 && <div className="w-4 sm:w-10 h-[2px] bg-[#6b5b3e] shrink-0" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Step 1 Section */}
      <motion.div
        className="flex flex-col text-xl mdlg:text-3xl mt-5 xl:mt-15 p-4 max-w-5xl mx-auto w-full"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <span className="text-left text-[#2f2a25]">Step 1: Secure Your Spot</span>
        <span className="text-sm md:text-sm lg:text-lg xl:text-xl text-[#736345]">
          Choose your session, confirm your details, and proceed to a safe and secure payment.
        </span>
      </motion.div>

      {/* Centering wrapper */}
      <div className="flex justify-center items-center w-full">

        {/* Cards */}
        <motion.div
          className="flex flex-col gap-4 mt-5 lg:mt-10 w-full max-w-6xl overflow-x-auto lg:overflow-visible"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-4xl overflow-hidden min-w-max lg:min-w-0 flex-shrink-0 lg:w-full"
            >

              {/* Background image */}
              <img
                src="/payment-card-bg-img.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full md:object-cover lg:object-contain"
              />

              {/* Content — absolute on top of image */}
              <div className="absolute inset-0 flex items-center px-6 py-6">

                {/* LEFT */}
                <div className="flex items-center gap-2 lg:gap-4 w-[120px] md:w-[180px] lg:w-[280px] flex-shrink-0">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-18 h-18 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
                  />
                  <span className="text-sm lg:text-xl font-bold text-[#736345] whitespace-nowrap">
                    {service.name}
                  </span>
                </div>

                {/* MIDDLE */}
                <div className="flex flex-1 items-center justify-center px-1">
                  {service.hasSessionSelect ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center justify-between gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs lg:text-sm outline-none bg-white cursor-pointer text-[#736345] hover:bg-gray-50 transition shadow-sm min-w-[200px] w-[200px]">
                          <span className="truncate">{selectedSessions[i] || "Select sessions"}</span>
                          <ChevronDown className="w-3.5 h-3.5 text-[#736345] opacity-70 flex-shrink-0" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        className="rounded-2xl shadow-lg border border-gray-100 bg-white p-1 min-w-[200px]"
                      >
                        {service.sessions.map((session, j) => (
                          <DropdownMenuItem
                            key={j}
                            onSelect={() =>
                              setSelectedSessions(() => {
                                const updated = services.map(() => "");
                                updated[i] = session;
                                return updated;
                              })
                            }
                            className="rounded-xl px-4 py-1 text-sm text-[#736345] cursor-pointer hover:bg-[#f5ede2] focus:bg-[#f5ede2]"
                          >
                            {session}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <span className="text-[#736345] text-xs lg:text-sm text-center whitespace-nowrap">
                      {service.detail}
                    </span>
                  )}
                </div>

                {/* RIGHT */}
                <div className="flex items-center justify-end gap-2 lg:gap-3 w-[120px] md:w-[180px] lg:w-[280px] flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-between gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs lg:text-sm outline-none bg-white cursor-pointer text-[#736345] hover:bg-gray-50 transition shadow-sm min-w-[180px] w-[180px]">
                        <span className="truncate">{selectedGuides[i] || "Select your guide"}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#736345] opacity-70 flex-shrink-0" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      className="rounded-2xl shadow-lg border border-gray-100 bg-white p-1 min-w-[160px]"
                    >
                      {service.guides.map((guide, j) => (
                        <DropdownMenuItem
                          key={j}
                          onSelect={() =>
                            setSelectedGuides(() => {
                              const updated = services.map(() => "");
                              updated[i] = guide;
                              return updated;
                            })
                          }
                          className="rounded-xl px-3 py-1 text-sm text-[#736345] cursor-pointer hover:bg-[#f5ede2] focus:bg-[#f5ede2]"
                        >
                          {guide}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button
                    onClick={() => {
                      if (!selectedGuides[i]) return;
                      setActiveBooking({ guide: selectedGuides[i], serviceName: service.name });
                      setTimeout(() => {
                        bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }}
                    className="bg-[#3f5c4a] text-[#e9dac9] px-4 lg:px-6 py-1 rounded-full text-sm font-medium hover:bg-[#162d22] transition whitespace-nowrap"
                  >
                    Continue →
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

     {activeBooking && (
        <div ref={bookingRef}>
          <BookingDetailsForm
            key={activeBooking.guide + activeBooking.serviceName}
            guide={activeBooking.guide}
            serviceName={activeBooking.serviceName}
          />
        </div>
      )}
    </div>
  );
}