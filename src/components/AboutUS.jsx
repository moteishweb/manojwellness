// src/components/AboutUS.jsx
import React, { useMemo } from "react";
import aboutImg from "../assets/Aboutus.png";
import { FiCheckCircle } from "react-icons/fi";

export default function AboutUS() {
  const pills = useMemo(
    () => [
      { label: "Discipline", icon: <FiCheckCircle /> },
      { label: "Nutrition", icon: <FiCheckCircle /> },
      { label: "Transformation", icon: <FiCheckCircle /> },
    ],
    []
  );

  return (
    <section id="about" className="w-full bg-[#F3F7F3] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[600px] rounded-[28px] bg-[#4CAF50] p-[3px] overflow-hidden">
              <img
                src={aboutImg}
                alt="About Coach Manoj"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[604px] object-cover rounded-[26px]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge (center on mobile, left on desktop) */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center justify-center rounded-full bg-[#4CAF50]/15 px-6 py-2 text-[#2E7D32] font-semibold">
                About Coach Manoj
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
              Discipline, Nutrition &{" "}
              <span className="text-[#4CAF50]">Transformation</span>
            </h2>

            {/* Paragraphs */}
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#364153]">
              With over 20 years of experience in nutrition coaching and wellness
              transformation, I&apos;ve dedicated my life to helping people
              achieve their health goals through sustainable, science-based
              nutrition strategies.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#364153]">
              My approach combines personalized meal planning, behavioral
              coaching, and continuous support to ensure you not only reach your
              goals but maintain them for life. Every client receives a
              customized program designed specifically for their unique needs,
              preferences, and lifestyle.
            </p>

            {/* Pills: stacked on mobile, 3 in a row on tablet/desktop */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              {pills.map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white text-xl">
                    {p.icon}
                  </div>
                  <p className="text-black font-semibold">{p.label}</p>
                </div>
              ))}
            </div>

            {/* Button (center on mobile, left on desktop) */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-[#4CAF50] px-6 py-3 text-white font-semibold hover:bg-[#43a047] transition"
              >
                Start Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}