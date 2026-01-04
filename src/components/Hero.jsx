// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/Container.png";
import tiltImg from "../assets/tilt.png";
import { FiAward, FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import apple from "../assets/apple_icon.png";
import star from "../assets/star_icon.png";
import plate from "../assets/plate_icon.png";

export default function Hero() {
  const tiles = [
    { icon: <FiAward />, value: "20+", label: "Years Of Experience" },
    { icon: <FiTrendingUp />, value: "200+", label: "Transformations" },
    { icon: <FiUsers />, value: "148+", label: "Happy Clients" },
    { icon: <FaStar />, value: "90 - Day", label: "Programs" },
  ];

  const offers = [
    {
      icon: plate,
      title: "Personalized Nutrition Plans",
      desc: "Custom meal plans tailored to your unique body, goals, and preferences for sustainable results.",
    },
    {
      icon: apple,
      title: "Dietary Guidance",
      desc: "Expert advice on healthy eating habits, portion control, and making smart food choices.",
    },
    {
      icon: star,
      title: "Lifestyle Transformation",
      desc: "Comprehensive support to help you develop lasting healthy eating habits and achieve wellness.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Badge */}
        <div className="relative z-10 w-full flex justify-center pt-10 sm:pt-12 md:pt-14 px-4">
          <div className="rounded-3xl border border-[#4CAF50] bg-[#4CAF5033] px-4 py-2 sm:px-5 sm:py-3 backdrop-blur">
            <p className="text-[#4CAF50] text-[11px] sm:text-[12px] font-normal">
              Premium Nutrition Coaching
            </p>
          </div>
        </div>

        {/* Name */}
        <div className="relative z-10 w-full flex justify-center pt-3 sm:pt-4 px-4">
          <h1 className="text-white font-bold text-[34px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-center leading-tight">
            MANOJ LAKSHMI
          </h1>
        </div>

        {/* Line */}
        <div className="mx-auto w-[90px] sm:w-[110px] md:w-[125px] h-[3px] sm:h-[4px] bg-[#4CAF50] mt-3 sm:mt-4" />

        {/* Subheading */}
        <div className="relative z-10 w-full flex justify-center pt-2 px-4">
          <p className="text-white font-thin text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px] text-center">
            Nutrition Coaching That Delivers Real Results
          </p>
        </div>

        {/* Description */}
        <div className="relative z-10 w-full flex justify-center pt-4 sm:pt-6 px-4">
          <p className="font-arimo max-w-3xl text-center text-white/95 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-thin leading-relaxed">
            Transform your health through personalized nutrition strategies,
            sustainable <br className="hidden sm:block" />
            eating habits, and expert guidance tailored to your unique body and
            lifestyle goals
          </p>
        </div>

        {/* Buttons (stack on mobile) */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 px-4">
          <button className="w-full sm:w-auto bg-[#4CAF50] text-white text-[12px] sm:text-[13px] px-5 py-3 rounded-xl font-semibold hover:bg-[#43a047] transition">
            Start Your Nutrition Journey
          </button>

          <button className="w-full sm:w-auto bg-transparent text-white text-[12px] sm:text-[13px] px-5 py-3 rounded-xl font-semibold border border-white/60 hover:bg-white/10 transition">
            View Nutrition Programs
          </button>
        </div>

        {/* Tilt Image (responsive spacing) */}
        <div className="relative z-10 w-full flex justify-center pt-10 sm:pt-14 md:pt-20 px-4">
          <img
            src={tiltImg}
            alt="Tilt"
            className="h-6 sm:h-7 md:h-9 lg:h-10 w-auto object-contain"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="w-full bg-[#033A00]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {tiles.map((t) => (
              <div key={t.label} className="w-full max-w-[240px] text-center">
                <div className="mx-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-lg sm:text-xl">
                  {t.icon}
                </div>

                <div className="mt-3 text-white text-2xl sm:text-3xl font-bold">
                  {t.value}
                </div>

                <div className="mt-1 text-white/90 text-xs sm:text-sm font-medium">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER TITLE */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full flex justify-center">
            <p className="text-black text-[24px] sm:text-[30px] md:text-[35px] font-bold text-center">
              What we <span className="text-green-500">Offer</span>
            </p>
          </div>

          <div className="w-full flex justify-center mt-2">
            <p className="text-[13px] sm:text-[15px] text-center text-gray-700">
              Comprehensive nutrition coaching solutions
            </p>
          </div>
        </div>
      </section>

      {/* OFFER CARDS */}
      <section className="w-full bg-white pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {offers.map((c) => (
              <div
                key={c.title}
                className="w-full max-w-sm rounded-2xl bg-[#F3F7F3] p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                  <img
                    src={c.icon}
                    alt={c.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-gray-900">
                  {c.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}