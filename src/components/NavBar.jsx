// src/components/NavBar.jsx
import React, { useMemo, useState } from "react";
import logo from "../assets/logo.png";

const cx = (...c) => c.filter(Boolean).join(" ");

const IconMenu = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconClose = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Programs", href: "#programs" },
      { label: "Transformations", href: "#transformations" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contactus" },
    ],
    []
  );

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Coach Manoj Lakshmi"
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop + Tablet Menu (md and above) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-gray-700 transition hover:text-green-600"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#get-started"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Toggle (below md) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cx(
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-[560px]" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pb-4 pt-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-green-600"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#get-started"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}