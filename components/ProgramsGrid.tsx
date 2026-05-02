"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { motion } from "framer-motion";


import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";




type Category = "all" | "leadership" | "hr" | "sales" | "employee";

const filterMap: Record<Category, number[]> = {
  all:        Array.from({ length: 18 }, (_, i) => i),
  leadership: [4, 5, 6, 8,17],
  hr:         [1, 11, 12, 13, 14],
  sales:      [2, 7, 10],
  employee:   [0, 3, 9, 15,16],
};

export default function ProgramsGrid() {


  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visible = (i: number) => filterMap[activeFilter].includes(i);



  const programs = [
  {
    title: "Stress Management & Emotional Balance",
    desc: "Learn to identify workplace stress triggers and apply mindfulness techniques to manage pressure and emotional overload.",
    tags: ["Mindfulness", "Workplace Wellbeing"]
  },
  {
    title: "Building Workplace Relationships",
    desc: "Build meaningful professional relationships through emotional awareness and effective communication practices.",
    tags: ["Team Culture"]
  },
  {
    title: "Managing Negative Emotions",
    desc: "Learn practical techniques from positive psychology to manage negative emotions and respond with clarity in difficult situations.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Connecting the Dots in Life",
    desc: "Bridge the gap between professional goals and personal wellbeing through mindfulness and emotional practices.",
    tags: ["Mindfulness", "Life Balance"]
  },
  {
    title: "Leadership in Economic Downturn",
    desc: "Develop emotional resilience and mindfulness skills to lead teams through uncertainty and high-pressure environments.",
    tags: ["Leadership Development"]
  },
  {
    title: "Building a Happy Company",
    desc: "Using Positive Psychology and spirituality, this program helps senior leadership create a happiness ecosystem within the organization.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Managing Success",
    desc: "Learn to stay grounded and emotionally balanced while handling growth, responsibility, and leadership pressure.",
    tags: ["Leadership Growth"]
  },
  {
    title: "Competitiveness the Buddha Way",
    desc: "Develop a balanced approach to competition without sacrificing collaboration and emotional wellbeing.",
    tags: ["Sales Performance", "Mindfulness"]
  },
  {
    title: "When Going Gets Tough",
    desc: "Middle managers learn mindfulness tools to manage pressure from both leadership and operational teams.",
    tags: ["Leadership Skills"]
  },
  {
    title: "Connecting with the New-Age Employee",
    desc: "Understand evolving workplace values and build engagement strategies for modern employees.",
    tags: ["Employee Engagement"]
  },
  {
    title: "Transforming Anger into Positive Energy",
    desc: "Participants learn how anger can be channeled into productive outcomes.",
    tags: ["Emotional Intelligence"]
  },
  {
    title: "Invisible Direction of Growth",
    desc: "Explores emotional growth beyond professional success using behavioral therapies and meditation.",
    tags: ["Personal Growth", "Self Awareness"]
  },
  {
    title: "Gratitude for a Fulfilling Career",
    desc: "Build a mindset of gratitude that improves both career satisfaction and workplace relationships.",
    tags: ["Positive Psychology"]
  },
  {
    title: "Compassion in Corporate Life",
    desc: "Build compassionate leadership and collaborative teams aligned with organizational goals.",
    tags: ["Leadership Skills", "Team Harmony"]
  },
  {
    title: "Flourishing as the Ultimate Goal",
    desc: "Programs designed to help employees thrive emotionally and professionally through applied philosophy and positive psychology.",
    tags: ["Positive Psychology", "Wellbeing"]
  },
  {
    title: "Unlearning Helplessness",
    desc: "Helps employees overcome learned helplessness and contribute positively to the workplace ecosystem.",
    tags: ["Emotional Resilience"]
  },
  {
    title :"Emotional Resilience for High Performers",
    desc:"Train individuals to recover quickly from setbacks and maintain peak performance.",
    tags:["Emotional Strength","Resilience"]
  },
   {
    title :"Mindful Decision Making",
    desc:"Improve clarity and reduce impulsive decisions through structured awareness practices.",
    tags:["Mindfulness","Decision Making"]
  }
];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };
    const cardVariants = {
    offscreen: { opacity: 0, y: 50, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
    },
  };
  return (
    <div className="p-6 xl:px-16 xl:pb-16 xl:pt-8">

<motion.div
  className="flex flex-col xl:flex xl:flex-row justify-center gap-6"
  variants={fadeUp}
>
  {/* All Programs Button */}
  <Button
    onClick={() => setActiveFilter("all")}
    className={`px-20 py-7 rounded-full border-2 border-[#544120] self-center transition-all ${
      activeFilter === "all"
        ? "bg-[#544120] text-white"
        : "bg-[#f3efe8] text-[#736345]"
    }`}
  >
    All Programs
  </Button>
<div className="md:hidden self-center">
  <DropdownMenu>
    
    {/* Trigger (looks like your select) */}
    <DropdownMenuTrigger asChild>
      <Button className="w-full px-6 py-6 rounded-full border-2 border-[#544120] bg-[#f3efe8] text-[#544120] flex justify-between items-center">
        
        {/* Selected Value */}
        <span>
          {activeFilter === "leadership"
            ? "Leadership"
            : activeFilter === "employee"
            ? "Employee Wellness"
            : activeFilter === "hr"
            ? "HR Programs"
            : activeFilter === "sales"
            ? "Sales Teams"
            : "Select Category"}
        </span>

        {/* Arrow Icon */}
        <ChevronDown size={18} />
      </Button>
    </DropdownMenuTrigger>

    {/* Dropdown Content */}
    <DropdownMenuContent className="w-56 rounded-2xl border-[#544120]">

      <DropdownMenuItem
        onClick={() => setActiveFilter("leadership")}
        className={activeFilter === "leadership" ? "font-semibold text-[#544120]" : ""}
      >
        Leadership
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={() => setActiveFilter("employee")}
        className={activeFilter === "employee" ? "font-semibold text-[#544120]" : ""}
      >
        Employee Wellness
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={() => setActiveFilter("hr")}
        className={activeFilter === "hr" ? "font-semibold text-[#544120]" : ""}
      >
        HR Programs
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={() => setActiveFilter("sales")}
        className={activeFilter === "sales" ? "font-semibold text-[#544120]" : ""}
      >
        Sales Teams
      </DropdownMenuItem>

    </DropdownMenuContent>
  </DropdownMenu>
</div>

  {/* ✅ Desktop Tabs */}
  <div className="hidden md:flex items-center justify-center text-lg py-3 px-10 rounded-full border-2 border-[#544120] gap-4 whitespace-nowrap w-fit self-center bg-[#f3efe8]">
    
    <span
      onClick={() => setActiveFilter("leadership")}
      className={`cursor-pointer transition ${
        activeFilter === "leadership"
          ? "text-[#544120] font-semibold"
          : "text-[#736345]"
      }`}
    >
      Leadership
    </span>

    <span>|</span>

    <span
      onClick={() => setActiveFilter("employee")}
      className={`cursor-pointer transition ${
        activeFilter === "employee"
          ? "text-[#544120] font-semibold"
          : "text-[#736345]"
      }`}
    >
      Employee Wellness
    </span>

    <span>|</span>

    <span
      onClick={() => setActiveFilter("hr")}
      className={`cursor-pointer transition ${
        activeFilter === "hr"
          ? "text-[#544120] font-semibold"
          : "text-[#736345]"
      }`}
    >
      HR Programs
    </span>

    <span>|</span>

    <span
      onClick={() => setActiveFilter("sales")}
      className={`cursor-pointer transition ${
        activeFilter === "sales"
          ? "text-[#544120] font-semibold"
          : "text-[#736345]"
      }`}
    >
      Sales Teams
    </span>
  </div>
</motion.div>
      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 md:grid-cols-2 gap-5 lg:grid-cols-3 w-fit mx-auto max-w-[1920px] mt-12">
         {visible(0) && (
        <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_EmployeeWellness.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[0].title}
      </div>

      <div className="text-sm">
        {programs[0].desc}
      </div>

      <div className="flex gap-3">
        <Button className="bg-[#F3EFE8]/70 w-22 rounded-4xl text-[10px] text-[#736345]">
          {programs[0].tags[0]}
        </Button>
        <Button className="bg-[#F3EFE8]/70 rounded-4xl w-35 text-[10px] text-[#736345]">
          {programs[0].tags[1]}
        </Button>
      </div>
    </div>
  </Card>
</motion.div>)}

          {visible(1) && ( <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_HRPrograms.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[1].title}
      </div>

      <div className="text-sm">
        {programs[1].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[rgba(243,239,232,0.7)] w-22 rounded-4xl text-[10px] text-[#736345]">
    {programs[1].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
      {visible(2) && (
     <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_SalesTeam.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#E9DAC9]">
      <div className="text-lg">
        {programs[2].title}
      </div>

      <div className="text-sm">
        {programs[2].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[rgba(243,239,232,0.4)] w-29 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[2].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(3) && (
   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_EmployeeWellness.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[3].title}
      </div>

      <div className="text-sm">
        {programs[3].desc}
      </div>

      <div className="flex gap-3 mt-8">
        <Button className="bg-[#F3EFE8]/70 w-22 rounded-4xl text-[10px] text-[#736345]">
          {programs[3].tags[0]}
        </Button>
        <Button className="bg-[#F3EFE8]/70 rounded-4xl w-22 text-[10px] text-[#736345]">
          {programs[3].tags[1]}
        </Button>
      </div>
    </div>

  </Card>
</motion.div>)}
 {visible(4) && (
  <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_Leadership.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#9EAD8C]">
      <div className="text-lg">
        {programs[4].title}
      </div>

      <div className="text-sm">
        {programs[4].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[#F3EFE8]/40 w-37 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[4].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(5) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_Leadership.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-2 pl-3 pt-2 text-[#9EAD8C]">
      <div className="text-lg">
        Building a Happy <br/>Company
      </div>

      <div className="text-sm">
        {programs[5].desc}
      </div>

      <div className="flex gap-3 mt-6">
  <Button className="bg-[#F3EFE8]/40 w-35 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[5].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(6) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_Leadership.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#9EAD8C]">
      <div className="text-lg">
        Managing Success
      </div>

      <div className="text-sm">
        {programs[6].desc}
      </div>

      <div className="flex gap-3 mt-7">
  <Button className="bg-[#F3EFE8]/40 w-37 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[6].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}

 {visible(7) && (

   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_SalesTeam.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#E9DAC9]">
      <div className="text-lg">
        {programs[7].title}
      </div>

      <div className="text-sm">
        {programs[7].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[rgba(243,239,232,0.4)] w-29 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[7].tags[0]}
  </Button>
    <Button className="bg-[rgba(243,239,232,0.4)] w-25 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[7].tags[1]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(8) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_Leadership.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#9EAD8C]">
      <div className="text-lg">
        When Going Gets <br/>Tough
      </div>

      <div className="text-sm">
        {programs[8].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[#F3EFE8]/40 w-30 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[8].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(9) && (

   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_EmployeeWellness.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
       Connecting with the <br/>New-Age Employee
      </div>

      <div className="text-sm">
        {programs[9].desc}
      </div>

      <div className="flex gap-3">
        <Button className="bg-[#F3EFE8]/70 w-35 rounded-4xl text-[10px] text-[#736345] mt-5">
          {programs[9].tags[0]}
        </Button>
      </div>
    </div>
  </Card>
</motion.div>)}

 {visible(10) && (
   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_SalesTeam.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#E9DAC9]">
      <div className="text-lg">
        {programs[10].title}
      </div>

      <div className="text-sm">
        {programs[10].desc}
      </div>

      <div className="flex gap-3">
  <Button className="bg-[rgba(243,239,232,0.4)] w-34 rounded-4xl text-[10px] text-[#F3EFE8] mt-5">
    {programs[10].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}

 {visible(11) && (
   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_HRPrograms.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[11].title}
      </div>

      <div className="text-sm">
        {programs[11].desc}
      </div>

      <div className="flex gap-3 mt-7">
  <Button className="bg-[rgba(243,239,232,0.7)] w-27 rounded-4xl text-[10px] text-[#736345]">
    {programs[11].tags[0]}
  </Button>
   <Button className="bg-[rgba(243,239,232,0.7)] w-27  rounded-4xl text-[10px] text-[#736345]">
    {programs[11].tags[1]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}

 {visible(12) && (
   <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_HRPrograms.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[12].title}
      </div>

      <div className="text-sm">
        {programs[12].desc}
      </div>

      <div className="flex gap-3 mt-5">
  <Button className="bg-[rgba(243,239,232,0.7)] w-30 rounded-4xl text-[10px] text-[#736345]">
    {programs[12].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}

 {visible(13) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_HRPrograms.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[13].title}
      </div>

      <div className="text-sm">
        {programs[13].desc}
      </div>

      <div className="flex gap-3 mt-5">
  <Button className="bg-[rgba(243,239,232,0.7)] w-27 rounded-4xl text-[10px] text-[#736345]">
    {programs[13].tags[0]}
  </Button>
   <Button className="bg-[rgba(243,239,232,0.7)] w-27  rounded-4xl text-[10px] text-[#736345] ">
    {programs[13].tags[1]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(14) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_HRPrograms.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-2 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[14].title}
      </div>

      <div className="text-sm">
        {programs[14].desc}
      </div>

      <div className="flex gap-3 mt-1">
  <Button className="bg-[rgba(243,239,232,0.7)] w-30 rounded-4xl text-[10px] text-[#736345]">
    {programs[14].tags[0]}
  </Button>
   <Button className="bg-[rgba(243,239,232,0.7)] w-22  rounded-4xl text-[10px] text-[#736345] ">
    {programs[14].tags[1]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}
 {visible(15) && (
 <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_EmployeeWellness.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        Unlearning <br/>Helplessness
      </div>

      <div className="text-sm">
        {programs[15].desc}
      </div>

      <div className="flex gap-3">
        <Button className="bg-[#F3EFE8]/70 w-35 rounded-4xl text-[10px] text-[#736345]">
          {programs[15].tags[0]}
        </Button>
      </div>
    </div>
  </Card>
</motion.div>)}
  {visible(16) && (
        <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_EmployeeWellness.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#736345]">
      <div className="text-lg">
        {programs[16].title}
      </div>

      <div className="text-sm">
        {programs[16].desc}
      </div>

      <div className="flex gap-3 mt-5">
        <Button className="bg-[#F3EFE8]/70 w-30 rounded-4xl text-[10px] text-[#736345]">
          {programs[16].tags[0]}
        </Button>
        <Button className="bg-[#F3EFE8]/70 rounded-4xl w-22 text-[10px] text-[#736345]">
          {programs[16].tags[1]}
        </Button>
      </div>
    </div>
  </Card>
</motion.div>)}
{visible(17) && (
  <motion.div
  className="w-full max-w-[320px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
>
  <Card className="relative w-70 h-65 rounded-4xl overflow-hidden border-yellow-400 border-2">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Card_Leadership.png')",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 px-3 pt-2 text-[#9EAD8C]">
      <div className="text-lg">
        {programs[17].title}
      </div>

      <div className="text-sm">
        {programs[17].desc}
      </div>

      <div className="flex gap-3 mt-12">
  <Button className="bg-[#F3EFE8]/40 w-37 rounded-4xl text-[10px] text-[#F3EFE8]">
    {programs[17].tags[0]}
  </Button>
</div>
    </div>

  </Card>
</motion.div>)}





        
      </div>
    </div>
  );
}