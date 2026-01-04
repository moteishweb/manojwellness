// src/components/TestMonials.jsx
import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import tIcon from "../assets/Icon.png";

const cx = (...c) => c.filter(Boolean).join(" ");

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={cx(
            "text-sm",
            i < value ? "text-[#4CAF50]" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

export default function TestMonials() {
  // ✅ Replace with your real data
  const testimonials = [
    {
      name: "Sravani Reddy",
      role: "Lost 35 lbs through nutrition",
      rating: 5,
      icon : tIcon,
      quote:
        "Manoj completely changed my relationship with food. I learned to eat healthy without feeling deprived!",
      avatar: "/profile.png", // put image in public/ or change to import
    },
    {
      name: "Ravi Teja",
      role: "Complete lifestyle change",
      rating: 5,
      icon : tIcon,
      quote:
        "The weekly check-ins kept me consistent. I finally built habits that I can actually maintain long-term.",
      avatar: "/profile.png",
    },
    {
      name: "Anusha",
      role: "Transformed eating habits",
      rating: 5,
      icon : tIcon,
      quote:
        "Simple plan, amazing results. Meals were easy to follow and I felt energetic within weeks.",
      avatar: "/profile.png",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-[#F3F7F3] py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 1) Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center rounded-full bg-[#4CAF50]/15 border border-[#2E7D32] px-6 py-2 text-[#2E7D32] font-semibold">
            Our Client Stories
          </span>
        </div>

        {/* 2) Heading + 3) Paragraph */}
        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
            What our clients <span className="text-[#4CAF50]">Say</span>
          </h2>

          <p className="mt-4 text-black/75 text-base sm:text-lg leading-relaxed">
            Real feedback from real transformations
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition p-6"
            >
              {/* Top row: avatar + name/role */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border border-black/10"
                />

                <div className="flex-1">
                  <p className="font-bold text-black">{t.name}</p>
                  <p className="text-sm text-black/60">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4">
                <Stars value={t.rating} />
              </div>

              <div className="mt-3">
               
               <img src={t.icon} alt="" className="w-5 h-5 object-contain" />
                </div>

              {/* Quote */}
              <p className="mt-4 text-black/75 leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}