// src/components/Program.jsx
import React from "react";
import { FiCheck, FiAward, FiUserCheck, FiTrendingUp } from "react-icons/fi";

export default function Program() {
  const included = [
    "Personalized nutrition plan",
    "Weekly progress check-ins",
    "Custom meal planning",
    "Nutrition tracking & analysis",
    "Lifestyle coaching",
    "Recipe library access",
    "24/7 support & accountability",
    "Private community access",
  ];

  const benefits = [
    {
      title: "Guaranteed Results",
      desc: "See measurable progress or your money back",
      icon: <FiAward />,
    },
    {
      title: "Expert Guidance",
      desc: "20+ years of coaching experience",
      icon: <FiUserCheck />,
    },
    {
      title: "Sustainable Approach",
      desc: "Build habits that last a lifetime",
      icon: <FiTrendingUp />,
    },
  ];

  return (
    <section
      id="programs"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/transform.jpg)" }} // ✅ put image in public/
    >
      {/* ✅ overlay for readability */}
      <div className="w-full bg-black/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 sm:py-16">
          {/* Top button */}
          <div className="flex justify-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#4CAF50] bg-transparent px-6 py-2 text-[#2E7D32] font-semibold">
              Transform Your Life
            </span>
          </div>

          {/* Heading + paragraph */}
          <div className="mt-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              90-Day <span className="text-[#4CAF50]">Transformation</span> Program
            </h2>
            <p className="mt-4 text-black/75 text-base sm:text-lg leading-relaxed">
              Our signature comprehensive nutrition program designed for real,
              lasting results
            </p>
          </div>

          {/* Main Card (center, 2 columns) */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left column (green) */}
                <div className="bg-[#4CAF50] p-7 sm:p-9">
                  <h3 className="text-white text-xl font-bold">
                    What&apos;s Included
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <FiCheck className="text-[#4CAF50]" />
                        </span>
                        <span className="text-white font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column (white) */}
                <div className="bg-white p-7 sm:p-9">
                  <div className="space-y-6">
                    {benefits.map((b) => (
                      <div key={b.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/15 flex items-center justify-center text-[#4CAF50] text-xl">
                          {b.icon}
                        </div>
                        <div>
                          <h4 className="text-black font-bold text-lg">
                            {b.title}
                          </h4>
                          <p className="mt-1 text-black/70 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enroll button (Full Width) */}
                  <div className="mt-8">
                    <a
                      href="#enroll"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#4CAF50] px-7 py-3 text-white font-semibold hover:bg-[#43a047] transition"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End card */}
        </div>
      </div>
    </section>
  );
}