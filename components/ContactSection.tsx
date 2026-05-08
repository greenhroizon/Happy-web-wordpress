"use client";

import { Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full pt-4 pb-8 px-4 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl leading-tight font-canela text-[#4F6756]">
              Let’s connect
              <br />
              with Intentions
            </h2>

            <p className="mt-6 text-[#2F2F2F] text-base leading-7 max-w-md">
              Whether you're seeking clarity, balance, or deeper alignment,
              this is your space to begin.
              <br />
              Share what’s on your mind, and let’s explore your next step
              together
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-3">
            <MessageCircle className="w-6 h-6 text-[#4F6756] mt-1" />

            <div>
              <h3 className="font-semibold text-xl text-black">WhatsApp</h3>
              <p className="text-[#2F2F2F] mt-1">
                Let’s talk heart-to-heart
              </p>

              <a
                href="tel:+919811237999"
                className="underline text-[#2F2F2F] mt-1 inline-block"
              >
                (+91) 9811237999
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-[#4F6756] mt-1" />

            <div>
              <h3 className="font-semibold text-xl text-black">Email</h3>

              <p className="text-[#2F2F2F] mt-1">
                Write to us anytime
              </p>

              <a
                href="mailto:info@happyho.in"
                className="underline text-[#2F2F2F] mt-1 inline-block"
              >
                info@happyho.in
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-[#7A674C] text-lg">
                Full Name*
              </label>

              <input
                type="text"
                className="w-full h-12 rounded-lg border border-[#8A8A8A] bg-white px-4 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-[#7A674C] text-lg">
                Email*
              </label>

              <input
                type="email"
                className="w-full h-12 rounded-lg border border-[#8A8A8A] bg-white px-4 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-[#7A674C] text-lg">
                Phone Number*
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-16 h-12 rounded-lg border border-[#8A8A8A] bg-white px-2 outline-none"
                />

                <input
                  type="text"
                  className="flex-1 h-12 rounded-lg border border-[#8A8A8A] bg-white px-1 outline-none"
                />
              </div>
            </div>

            {/* Concern */}
            <div>
              <label className="block mb-2 text-[#7A674C] text-lg">
                Concern / Focus Area*
              </label>

              <textarea
                rows={4}
                className="w-full rounded-lg border border-[#8A8A8A] bg-white p-4 outline-none resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#4F6756] hover:bg-[#425746] transition-all text-white px-8 h-14 rounded-full border-2 border-[#D89C2B] text-lg font-medium"
            >
              Book Discovery Session
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}