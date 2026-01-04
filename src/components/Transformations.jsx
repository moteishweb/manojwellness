// src/components/Transformations.jsx
import React, { useMemo, useState } from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function Transformations() {
  const filters = [
    { key: "all", label: "All" },
    { key: "weightLoss", label: "Weight Loss" },
    { key: "muscleGain", label: "Muscle Gain" },
    { key: "bodyRecomposition", label: "Body Recomposition" },
  ];

  // ✅ Sample data (replace images with your real ones)
  const items = [
    {
      id: 1,
      name: "Ravi",
      category: "weightLoss",
      before: "/vite.svg",
      after: "/vite.svg",
    },
    {
      id: 2,
      name: "Anusha",
      category: "muscleGain",
      before: "/vite.svg",
      after: "/vite.svg",
    },
    {
      id: 3,
      name: "Kiran",
      category: "bodyRecomposition",
      before: "/vite.svg",
      after: "/vite.svg",
    },
    {
      id: 4,
      name: "Sneha",
      category: "weightLoss",
      before: "/vite.svg",
      after: "/vite.svg",
    },
    {
      id: 5,
      name: "Vijay",
      category: "muscleGain",
      before: "/vite.svg",
      after: "/vite.svg",
    },
    {
      id: 6,
      name: "Divya",
      category: "bodyRecomposition",
      before: "/vite.svg",
      after: "/vite.svg",
    },
  ];

  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((x) => x.category === active);
  }, [active]);

  return (
    <section id="transformations" className="w-full bg-[#F3F7F3] py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* 1) Badge */}
       <div className="flex justify-center">
          <span className="inline-flex items-center justify-center rounded-full bg-[#4CAF50]/15 border border-[#2E7D32] px-6 py-2 text-[#2E7D32] font-semibold">
            Proven Results
          </span>
        </div>

        {/* 2) Heading */}
        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            <span className="text-black">Client </span>
            <span className="text-[#4CAF50]">Transformations</span>
          </h2>

          {/* 3) Paragraph */}
          <p className="mt-4 text-black/75 text-base sm:text-lg leading-relaxed">
            Real people, real results, real transformation
          </p>
        </div>

        {/* 4) Filter Pills */}
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cx(
                  "px-5 py-2 rounded-full font-semibold transition",
                  "bg-gray-200 text-white hover:bg-green-500",
                  active === f.key && "bg-[#4CAF50]/15 text-[#2E7D32] ring-1 ring-[#4CAF50]/40"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Optional: Cards Grid (so your filters actually show output) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <img src={t.before} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute left-3 bottom-3 text-xs font-semibold bg-black/60 text-white px-2 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative h-48">
                  <img src={t.after} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute left-3 bottom-3 text-xs font-semibold bg-[#4CAF50] text-white px-2 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>

              {/* Name + Category */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-black">{t.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-black/70">
                    {filters.find((x) => x.key === t.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If no items */}
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-black/60">
            No transformations found for this category.
          </p>
        )}
      </div>
    </section>
  );
}