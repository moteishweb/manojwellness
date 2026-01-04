// src/components/Services.jsx
import React from "react";
import { FiCheck } from "react-icons/fi";

import personal from "../assets/PersonalizedMealPlanning.png";
import nCounseling from "../assets/NutritionCounseling.png";
import wManagement from "../assets/WeightManagement.png";

import pIcon from "../assets/meal.png";
import nIcon from "../assets/nutriotion.png";
import wIcon from "../assets/weight.png";

export default function Services() {
  const cards = [
    {
      title: "Personalized Meal Planning",
      desc: "One-on-one customized nutrition plans designed specifically for your body type, dietary preferences, and health goals.",
      image: personal,
      icon: pIcon,
      points: ["Custom meal plans", "Portion guidance", "Nutrition tracking", "Flexible scheduling"],
    },
    {
      title: "Nutrition Counseling",
      desc: "Evidence-based nutrition strategies tailored to your lifestyle, preferences, and objectives.",
      image: nCounseling,
      icon: nIcon,
      points: ["Personalized meal plans", "Macro calculations", "Recipe suggestions", "Supplement guidance"],
    },
    {
      title: "Weight Management",
      desc: "Comprehensive weight loss program combining strategic nutrition and behavioral coaching.",
      image: wManagement,
      icon: wIcon,
      points: ["Fat loss nutrition", "Metabolic optimization", "Habit formation", "Accountability system"],
    },
  ];

  return (
    <section id="services" className="w-full bg-[#F3F7F3] py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center rounded-full bg-[#4CAF50]/15 border border-[#2E7D32] px-6 py-2 text-[#2E7D32] font-semibold">
            Our Services
          </span>
        </div>

        {/* Heading + Paragraph */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Comprehensive Nutrition <span className="text-[#4CAF50]">Coaching</span>
          </h2>

          <p className="mt-4 text-black/80 text-base md:text-lg leading-relaxed">
            Tailored solutions for your wellness journey
          </p>
        </div>

        {/* 3 Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-[170px] md:h-[190px]">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />

                {/* Icon bottom-left */}
                <div className="absolute left-4 bottom-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow">
                  <img src={c.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{c.title}</h3>
                <p className="mt-2 text-[#4A5565] text-sm leading-relaxed">{c.desc}</p>

                <ul className="mt-5 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-[#4CAF50]" />
                      <span className="text-[#364153] font-thin">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}