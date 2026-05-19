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
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface RadioProps {
  label: string;
  name: string;
  value: string;
  selectedValue: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

export default function Popup({
  open,
  onClose,
}: PopupProps) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    companyEmail: "",
    workEmail: "",
    contactNumber: "",
    city: "",
    organizationType: "",
    workshopType: "",
    sessionFormat: "",
    preferredDate: "",
    expectedParticipation: "",
    goals: "",
    hearAbout: "",
    agree: false,
      showSessionFormat: false,
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  try {

    setLoading(true);

    const payload: Record<string, string> = {
      Full_Name: formData.fullName,
      Designation: formData.designation,
      Company_Name: formData.companyName,
      Company_Email: formData.companyEmail,
      Work_Email: formData.workEmail,
      Contact_Number: formData.contactNumber,
      City: formData.city,
      Organization_Type: formData.organizationType,
      Workshop_Type: formData.workshopType,
      Preferred_Date: formData.preferredDate,
      Expected_Participation: formData.expectedParticipation,
      Goals: formData.goals,
      Hear_About: formData.hearAbout,
      Agree_To_Contact: formData.agree ? "Yes" : "No",
    };

    // Only send Session_Format if checkbox is checked
    if (formData.showSessionFormat) {
      payload.Session_Format = formData.sessionFormat;
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Form submitted successfully!");

      localStorage.setItem("fillthepopup", "true");

      setFormData({
        fullName: "",
        designation: "",
        companyName: "",
        companyEmail: "",
        workEmail: "",
        contactNumber: "",
        city: "",
        organizationType: "",
        workshopType: "",
        sessionFormat: "",
        preferredDate: "",
        expectedParticipation: "",
        goals: "",
        hearAbout: "",
        agree: false,
        showSessionFormat: false,
      });

      onClose();

    } else {

      alert("Failed to submit form");

    }

  } catch (error) {

    console.log(error);
    alert("Something went wrong");

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">

      {/* Main Wrapper */}
      <div className="min-h-screen flex items-start justify-center px-3 py-6 sm:px-6 sm:py-10">

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

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-2xl text-[#315a4d]"
            >
              ×
            </button>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-[#315a4d] text-2xl sm:text-4xl md:text-5xl font-canela">
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

            {/* Form */}
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  label="Full Name*"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <Input
                  label="Your Designation*"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  label="Company / Organization Name*"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />

                <Input
                  label="Company Email ID*"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                />
              </div>

              {/* Work Email */}
              <Input
                label="Work Email*"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
              />

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  label="Contact Number*"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />

                <Input
                  label="City*"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

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
                      name="organizationType"
                      value={item}
                      selectedValue={formData.organizationType}
                      onChange={handleChange}
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
                  ].map((item) => (
                    <Radio
                      key={item}
                      label={item}
                      name="workshopType"
                      value={item}
                      selectedValue={formData.workshopType}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </div>

      {/* Other */}
<div className="pt-2">

  <label className="flex items-center gap-3">

    <input
      type="checkbox"
      name="showSessionFormat"
      checked={formData.showSessionFormat}
      onChange={handleChange}
      className="h-3 w-3 cursor-pointer appearance-none rounded-full border-2 border-black checked:bg-[#315a4d] checked:border-[#315a4d] relative"
    />

    <span className="text-sm font-semibold text-[#444]">
      Other (Please Specify)
    </span>

  </label>

</div>
              {/* Session Format */}
              {/* Session Format */}
{formData.showSessionFormat && (
  <div>

    <label className="block text-sm font-semibold text-[#444] mb-3">
      Preferred Session Format
    </label>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

      {[
        "Online (Virtual)",
        "In-person (At your location)",
        "Retreat (Selected participants)",
        "Hybrid (Both Online/Offline)",
      ].map((item) => (

        <Radio
          key={item}
          label={item}
          name="sessionFormat"
          value={item}
          selectedValue={formData.sessionFormat}
          onChange={handleChange}
        />

      ))}

    </div>

  </div>
)}

              {/* Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  type="date"
                  label="Preferred Time & Date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />

                <Input
                  label="Expected Participation*"
                  name="expectedParticipation"
                  value={formData.expectedParticipation}
                  onChange={handleChange}
                />
              </div>

              {/* Goals */}
              <div>
                <label className="block text-sm font-semibold text-[#444] mb-2">
                  What are your main goals for this workshop?
                </label>

                <textarea
                  rows={4}
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
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
                      {formData.hearAbout || "Select an option"}

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
                        onClick={() =>
                          setFormData({
                            ...formData,
                            hearAbout: item,
                          })
                        }
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
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1"
                />

                <p className="text-xs sm:text-sm text-[#444]">
                  I agree to be contacted by Happy Ho Team regarding this enquiry.
                </p>
              </div>

              {/* Button */}
              <div className="pt-3">

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#315a4d] px-6 py-3 text-sm sm:text-base text-white font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : "Request a Callback"}
                </button>

                <p className="text-xs text-[#666] mt-2">
                  Our team will get in touch within 24–48 hours
                </p>
              </div>

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
  name,
  value,
  onChange,
}: InputProps) {

  return (
    <div>

      <label className="block text-sm font-semibold text-[#444] mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-[#b89b73] bg-white/90 p-3 outline-none focus:ring-2 focus:ring-[#315a4d]"
      />
    </div>
  );
}

/* Radio Component */
function Radio({
  label,
  name,
  value,
  selectedValue,
  onChange,
}: RadioProps) {

  return (
    <label className="flex items-center gap-2 text-sm text-[#444] cursor-pointer">

      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
}