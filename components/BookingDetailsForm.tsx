"use client";

import { useState ,useRef,useEffect} from "react";
  import { motion } from "framer-motion";
  import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
interface BookingFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  selectedService: string;
  selectedGuide: string;
  sessionType: "online" | "offline" | "";
  preferredDateTime: string;
  concern: string;
}

interface BookingDetailsFormProps {
  guide: string;
  serviceName: string;
}

export default function BookingDetailsForm({ guide, serviceName }: BookingDetailsFormProps) {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut"  as const},
    },
  };
  const [form, setForm] = useState<BookingFormData>({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
   selectedService: serviceName,  // ← pre-filled
    selectedGuide: guide, 
    sessionType: "",
    preferredDateTime: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const paymentRef = useRef<HTMLDivElement>(null);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(form);
  setIsSubmitted(true);
  setTimeout(() => {
    paymentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
};
  useEffect(() => {
  setForm((prev) => ({
    ...prev,
    selectedService: serviceName,
    selectedGuide: guide,
  }));
}, [serviceName, guide]);


  return (
    <div className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.h2
  className="text-xl md:text-2xl text-[#2f2a25] mb-1"
  variants={fadeUp}
  initial="hidden"
  animate="show"
>
        Step 2: Enter Your Details
      </motion.h2>
      <motion.p
  className="text-sm md:text-lg text-[#736345]/70 mb-6"
  variants={fadeUp}
  initial="hidden"
  animate="show"
>
        Please fill in your details to proceed with booking
      </motion.p>

      {/* Card */}
      <motion.div
          className="bg-[#e9dac9] rounded-3xl px-4 md:px-8 py-8 w-full overflow-hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
        <div className="flex flex-col gap-5 w-full">

          {/* Full Name */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm text-[#736345] font-medium">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-1 min-w-0">
              <label className="text-sm text-[#736345] font-medium">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
              />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <label className="text-sm text-[#736345] font-medium">
                Phone Number*
              </label>
              <div className="flex gap-2 min-w-0">
                <input
                  type="text"
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-14 flex-shrink-0 bg-white rounded-lg px-2 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40 text-center"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
                />
              </div>
            </div>
          </div>

          {/* Selected Service + Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col gap-1 min-w-0">
  <label className="text-sm text-[#736345] font-medium">
    Selected Service
  </label>
  <input
    type="text"
    value={form.selectedService}
    readOnly
    className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent cursor-default"
  />
</div>
       <div className="flex flex-col gap-1 min-w-0">
  <label className="text-sm text-[#736345] font-medium">
    Selected Guide
  </label>
  <input
    type="text"
    value={form.selectedGuide}
    readOnly
    className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent cursor-default"
  />
</div>
          </div>

          {/* Session Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#736345] font-medium">
              Session Type*
            </label>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
              <label className="flex items-center gap-2 text-sm text-[#736345] cursor-pointer">
                <input
                  type="radio"
                  name="sessionType"
                  value="online"
                  checked={form.sessionType === "online"}
                  onChange={handleChange}
                  className="accent-[#736345]"
                />
                Online (Zoom / Google Meet)
              </label>
              <label className="flex items-center gap-2 text-sm text-[#736345] cursor-pointer">
                <input
                  type="radio"
                  name="sessionType"
                  value="offline"
                  checked={form.sessionType === "offline"}
                  onChange={handleChange}
                  className="accent-[#736345]"
                />
                Offline (Studio)
              </label>
            </div>
          </div>

          {/* Preferred Time & Date */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm text-[#736345] font-medium">
              Preferred Time & Date
            </label>
            <input
              type="datetime-local"
              name="preferredDateTime"
              value={form.preferredDateTime}
              onChange={handleChange}
              className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
            />
          </div>

          {/* Concern / Focus Area */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm text-[#736345] font-medium">
              Concern / Focus Area*
            </label>
            <textarea
              name="concern"
              value={form.concern}
              onChange={handleChange}
              rows={4}
              className="w-full min-w-0 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#3f5c4a] hover:bg-[#162d22] text-white font-medium py-3 rounded-xl text-sm transition-colors duration-200"
          >
            Submit
          </button>

          <p className="text-center text-xs text-[#736345]/60">
            You'll be redirected to Payment securely
          </p>
        </div>
      </motion.div>
    {isSubmitted && (
        <div ref={paymentRef}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 py-8"
      >
      {/* Header */}
      <h2 className="text-xl md:text-2xl text-[#2f2a25] mb-1">
       Step 3: Payment Summary
      </h2>
      <p className="text-sm md:text-lg text-[#736345]/70 mb-6">
       Complete your payment to confirm your booking
      </p>

      {/* Card */}
      <div className="bg-[#e9dac9] rounded-3xl px-4 py-6">
        <div className="flex flex-col gap-3 text-[#2f2a25] text-sm md:text-base">

          <span className="font-semibold text-lg mb-2">Payment Summary</span>

          <div className="flex justify-between">
            <span className="text-[#736345]">Service:</span>
            <span>{form.selectedService || "—"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#736345]">Guide:</span>
            <span>{form.selectedGuide || "—"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#736345]">Mode:</span>
            <span>
              {form.sessionType === "online"
                ? "Online (Zoom / Google Meet)"
                : form.sessionType === "offline"
                ? "Offline (Studio)"
                : "—"}
            </span>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Amount:</span>
            <span>₹3000</span>
          </div>

          {/* Buttons */}
          <button className="mt-4 bg-[#3f5c4a] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#162d22] transition">
            Pay via Razorpay / UPI
          </button>

          <button className="bg-[#8b6b4a] text-white py-3 rounded-xl text-sm font-medium">
            Pay via Bank Transfer
          </button>
        </div>
      </div>
    </motion.div>
     </div>
    )}
  </div>
  );
}