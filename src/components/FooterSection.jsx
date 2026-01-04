// src/components/Footer.jsx
import React, { useMemo } from "react";
import logo from "../assets/logo.png";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
];

const moreLinks = [
  { label: "Transformations", href: "#transformations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contactus" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
];

function LinkList({ title, items }) {
  return (
    <div>
      <h3 className="text-[#4CAF50] font-bold text-lg">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-white/75 hover:text-white transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Socials({ items }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 transition flex items-center justify-center"
        >
          <span className="text-white text-lg">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}

function Contacts({ items }) {
  return (
    <div className="mt-4 space-y-5">
      {items.map((c, i) => (
        <div key={i} className="flex items-start gap-3">
          {/* Icon fixed size */}
          <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-[#4CAF50]">
            {c.icon}
          </div>

          {/* Text (wrap nicely, aligned) */}
          <div className="min-w-0">
            <p className="font-semibold text-white leading-snug whitespace-nowrap">
  {c.line1}
</p>
            <p className="text-white/70 text-sm leading-snug break-words">
              {c.line2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FooterSection() {
  const year = new Date().getFullYear();

  const socials = useMemo(
    () => [
      { label: "Facebook", href: "#", icon: <FaFacebookF /> },
      { label: "Instagram", href: "#", icon: <FaInstagram /> },
      { label: "YouTube", href: "#", icon: <FaYoutube /> },
      { label: "X", href: "#", icon: <FaXTwitter /> },
    ],
    []
  );

  const contacts = useMemo(
    () => [
      {
        icon: <FiPhone />,
        line1: "+1 (555) 123-4567",
        line2: "Mon-Sat 9AM-7PM",
      },
      {
        icon: <FiMail />,
        line1: "coach@manojlakshmi.com",
        line2: "24/7 Support",
      },
      {
        icon: <FiMapPin />,
        line1: "123 Wellness Avenue",
        line2: "Fitness District, CA 90210",
      },
    ],
    []
  );

  return (
    <footer className="w-full bg-[#060505] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-5 py-12 sm:py-14">
        {/* ✅ Mobile: 1 col | Tablet: 2 col | Desktop: 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center">
              <img
                src={logo}
                alt="Coach Manoj Lakshmi"
                className="h-9 sm:h-10 w-auto max-w-[220px] object-contain"
              />
            </a>

            <p className="mt-4 text-white/70 leading-relaxed">
              Your personal nutrition and transformation coach dedicated to
              delivering real, lasting results through sustainable wellness.
            </p>

            <Socials items={socials} />
          </div>

          {/* Links */}
          <LinkList title="Quick Links" items={quickLinks} />
          <LinkList title="More" items={moreLinks} />

          {/* Contact */}
          <div>
            <h3 className="text-[#4CAF50] font-bold text-lg">Contact Us</h3>
            <Contacts items={contacts} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {year} Manoj Lakshmi Coaching. All rights reserved.
          </p>

          <p className="text-white/60 text-sm">
            Designed By <span className="ml-1"></span>
            <a
              href="https://zenwareit.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/75 hover:text-white"
            >
              ZenwareIT Software Solution LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
