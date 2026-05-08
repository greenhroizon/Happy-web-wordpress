"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import ProgramsGrid from "@/components/ProgramsGrid";
import Sessions from "@/components/Sessions";
import Trust from "@/components/Trust";
import Wellness from "@/components/Wellness";
import Work from "@/components/Work";
import Popup from "@/components/popup";

export default function Corporate() {

  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {

    const alreadyFilled = localStorage.getItem("fillthepopup");
    console.log(typeof alreadyFilled)
    // Open popup only if form NOT submitted
    if (alreadyFilled !== "true") {
      setOpenPopup(true);
    }

    // Open every 30 seconds
    const interval = setInterval(() => {

      const filled =
        localStorage.getItem("fillthepopup");

      if (filled !== "true") {
        setOpenPopup(true);
      }

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      {/* Popup */}
      <Popup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      />

      <Wellness />
      <Sessions />
      <ProgramsGrid />
      <Trust />
      <Work />

      <div className="hidden md:block">
        <Footer />
      </div>

      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}