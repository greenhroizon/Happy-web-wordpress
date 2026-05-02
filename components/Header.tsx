"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openedsmall, setOpenedsmall] = useState(false);
  const dropdownRefsmall = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsidesmall = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsidesmall);
    return () => document.removeEventListener("mousedown", handleClickOutsidesmall);
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) { // 768px = Tailwind's md breakpoint
      setOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pt-12 px-4 xl:p-8 z-50 mx-auto max-w-[1920px]">
      
      <div className="bg-[#dcd8ce] rounded-full flex md:grid md:grid-cols-4 lg:grid-cols-5 items-center shadow-xl">

        {/* LOGO */}
  <Link href="/">
    <Image
      src="/footerImage.png"
      alt="logo"
      width={70}
      height={70}
      className="w-13 h-13 md:w-15 md:h-15 xl:w-20 xl:h-20 cursor-pointer"
    />
  </Link>



        {/* NAV LINKS (desktop only) */}
        <div className="col-span-2 lg:col-span-3 hidden md:flex gap-6 lg:gap-10 items-center justify-center text-sm lg:text-xl">
          <Link href="/AboutUs" className="cursor-pointer">About Us</Link>
          <Link href="/Programs" className="cursor-pointer">Programs</Link>
          <Link href="/Corporate" className="cursor-pointer">Corporate</Link>
          <div className="relative" ref={dropdownRef}>
  <div className="flex items-center gap-1">
    
    {/* Navigate to /Resources */}
    <Link href="/Resources" className="cursor-pointer">
      Resources
    </Link>

    {/* Only arrow toggles dropdown */}
    <button
      onClick={() => setOpened(prev => !prev)}
      className="cursor-pointer"
    >
     <span
  className={`inline-block text-xs transform transition-transform duration-200 ${
    opened ? "rotate-180" : "rotate-0"
  }`}
>
  ▼
</span>
    </button>
  </div>

  {opened && (
    <div className="absolute top-full mt-3 bg-white shadow-lg rounded-lg py-2 w-[160px] lg:w-[180px] z-50">
      <Link
        href="/Resources"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setOpened(false)}
      >
        Blog
      </Link>

      <Link
        href="/videos"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setOpened(false)}
      >
        Videos / Reels
      </Link>
    </div>
  )}
</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center pr-2">

          {/* DESKTOP BUTTON */}
            <Link href="/Payment" className="cursor-pointer">
          <Button className="hidden md:flex items-center justify-center bg-[#3f5c4a] hover:bg-[#162d22] cursor-pointer rounded-full text-sm lg:text-lg xl:text-xl px-4 md:py-6 xl:px-8 xl:py-8">
            
      Book Your Session


</Button>
    </Link>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-2 p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

     <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
className="fixed inset-0 bg-[#dcd8ce] z-40 flex flex-col items-start justify-center px-8 gap-8 text-2xl"
    >

      {/* ❌ CLOSE BUTTON (TOP RIGHT) */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 p-2"
      >
        <X size={28} />
      </button>

      {/* MENU LINKS */}
      <Link href="/" onClick={() => setOpen(false)}>Home</Link>
      <Link href="/AboutUs" onClick={() => setOpen(false)}>About Us</Link>
      <Link href="/Programs" onClick={() => setOpen(false)}>Programs</Link>
      <Link href="/Corporate" onClick={() => setOpen(false)}>Corporate</Link>
   <div className="relative" ref={dropdownRefsmall}>
  <div className="flex items-center gap-1">
    
    {/* Navigate to /Resources */}
    <Link href="/Resources" className="cursor-pointer">
      Resources
    </Link>

    {/* Only arrow toggles dropdown */}
    <button
      onClick={() => setOpenedsmall(prev => !prev)}
      className="cursor-pointer"
    >
     <span
  className={`inline-block text-xs transform transition-transform duration-200 ${
    opened ? "rotate-180" : "rotate-0"
  }`}
>
  ▼
</span>
    </button>
  </div>

  {openedsmall && (
    <div className="absolute top-full mt-3 bg-white shadow-lg rounded-lg py-2 w-[160px] lg:w-[180px] z-50">
      <Link
        href="/Resources"
        className="block px-4 py-2 hover:bg-gray-100 text-sm"
        onClick={() => setOpenedsmall(false)}
      >
        Blog
      </Link>

      <Link
        href="/videos"
        className="block px-4 py-2 hover:bg-gray-100 text-sm"
        onClick={() => setOpenedsmall(false)}
      >
        Videos / Reels
      </Link>
    </div>
  )}
</div>

      {/* CTA */}
         <Link href="/Payment" className="cursor-pointer">
      <Button className="bg-[#3f5c4a] text-white px-8 py-6 rounded-full">
     
      Book Your Session

      </Button>
          </Link>

    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}