"use client";

import { useState } from "react";
import Image from "next/image";
import HappyImage from "@/public/Happy Ho_Website Design.svg";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InputProps {
  label: string;
  type?: string;
}

interface RadioProps {
  label: string;
  name: string;
}

export default function Popup() {
  const [step, setStep] = useState(1);
  const [selectedSource, setSelectedSource] = useState("Select an option");

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">
      {/* Main Wrapper */}
      <div className="min-h-screen flex items-start justify-center px-3 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-10">
        
        {/* Popup Container */}
        <div className="relative w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl">

          {/* Background Image */}
          <Image
            src={HappyImage}
            alt="Happy Ho Design"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#efe1cf]/90" />

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-12">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-[#315a4d] text-2xl sm:text-4xl md:text-5xl font-canela leading-tight">
                Bring wellness to work.
                <br />
                Empower your people
              </h1>

              <p className="mt-4 text-[#444] text-sm sm:text-base font-medium">
                Book a Corporate Wellness Workshop
              </p>

              <p className="text-[#666] text-xs sm:text-sm mt-1">
                Let’s co-create a powerful experience for your team
              </p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    step >= item
                      ? "bg-[#315a4d]"
                      : "bg-[#d6c3aa]"
                  }`}
                />
              ))}
            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Full Name*" />
                    <Input label="Your Designation*" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Company / Organization Name*" />
                    <Input label="Company Email ID*" />
                  </div>

                  <Input label="Work Email*" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Contact Number*" />
                    <Input label="City*" />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-full bg-[#315a4d] px-6 py-3 text-sm sm:text-base text-white font-medium hover:opacity-90 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">

                  {/* Organization */}
                  <div>
                    <label className="block text-sm font-semibold text-[#444] mb-3">
                      What type of organization are you?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {[
                        "Startup",
                        "Small (1-50)",
                        "Medium (51-200)",
                        "Large (201-1000)",
                        "Enterprise (1000+)",
                      ].map((item) => (
                        <Radio
                          key={item}
                          label={item}
                          name="organization"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Workshop */}
                  <div>
                    <label className="block text-sm font-semibold text-[#444] mb-3">
                      What kind of workshop are you looking for?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        "Stress Management & Wellbeing",
                        "Emotional Intelligence & Resilience",
                        "Mindfulness & Focus",
                        "Leadership Wellbeing",
                        "Team Bonding & Communication",
                        "Other (Please Specify)",
                      ].map((item) => (
                        <Radio
                          key={item}
                          label={item}
                          name="workshop"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Other */}
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-[#444] mb-3">
                      Other (Please Specify)
                    </p>

                    <div className="w-full border-b border-[#b89b73]" />
                  </div>

                  {/* Session Format */}
                  <div>
                    <label className="block text-sm font-semibold text-[#444] mb-3">
                      Preferred Session Format
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                      {[
                        "Online (Virtual)",
                        "In-person (At your location)",
                        "Retreat (Selected participants)",
                        "Hybrid (Both Online/Offline)",
                      ].map((item) => (
                        <Radio
                          key={item}
                          label={item}
                          name="format"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-full border border-[#315a4d] px-6 py-3 text-sm sm:text-base text-[#315a4d] font-medium"
                    >
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="rounded-full bg-[#315a4d] px-6 py-3 text-sm sm:text-base text-white font-medium hover:opacity-90 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">

                  {/* Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      label="Preferred Time & Date"
                    />

                    <Input label="Expected Participation*" />
                  </div>

                  {/* Goals */}
                  <div>
                    <label className="block text-sm font-semibold text-[#444] mb-2">
                      What are your main goals for this workshop?
                    </label>

                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-[#b89b73] bg-white/90 p-3 outline-none focus:ring-2 focus:ring-[#315a4d]"
                    />
                  </div>

                  {/* Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-[#444] mb-2">
                      How did you hear about Happy Ho?
                    </label>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between rounded-lg border border-[#b89b73] bg-white/90 px-4 py-3 text-sm text-[#444] outline-none focus:ring-2 focus:ring-[#315a4d]"
                        >
                          {selectedSource}
                          <ChevronDown className="h-4 w-4 opacity-70" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                        {[
                          "Social Media",
                          "Internet",
                          "Newspaper",
                          "Colleague",
                          "Other",
                        ].map((item) => (
                          <DropdownMenuItem
                            key={item}
                            onClick={() => setSelectedSource(item)}
                          >
                            {item}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      className="mt-1"
                    />

                    <p className="text-xs sm:text-sm text-[#444]">
                      I agree to be contacted by Happy Ho Team regarding this enquiry.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between items-center pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-full border border-[#315a4d] px-6 py-3 text-sm sm:text-base text-[#315a4d] font-medium"
                    >
                      Previous
                    </button>

                    <button
                      type="submit"
                      className="rounded-full bg-[#315a4d] px-6 py-3 text-sm sm:text-base text-white font-medium hover:opacity-90 transition"
                    >
                      Request a Callback
                    </button>
                  </div>

                  <p className="text-xs text-[#666]">
                    Our team will get in touch within 24–48 hours
                  </p>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Input Component */
function Input({
  label,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#444] mb-2">
        {label}
      </label>

      <input
        type={type}
        className="w-full rounded-lg border border-[#b89b73] bg-white/90 p-3 outline-none focus:ring-2 focus:ring-[#315a4d]"
      />
    </div>
  );
}

/* Radio Component */
function Radio({
  label,
  name,
}: RadioProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-[#444] cursor-pointer">
      <input
        type="radio"
        name={name}
        className="accent-[#315a4d]"
      />

      <span>{label}</span>
    </label>
  );
}