// src/components/ContactUS.jsx
import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiSend,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const cx = (...c) => c.filter(Boolean).join(" ");
const INPUT =
  "h-12 rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#4CAF50]/40";

const contactCards = [
  {
    title: "Phone",
    line1: "+1 (555) 123-4567",
    line2: "Mon-Sat 9AM-7PM",
    icon: <FiPhone />,
  },
  {
    title: "Email",
    line1: "coach@manojlakshmi.com",
    line2: "24/7 Support",
    icon: <FiMail />,
  },
  {
    title: "Location",
    line1: "123 Wellness Avenue",
    line2: "Fitness District, CA 90210",
    icon: <FiMapPin />,
  },
  {
    title: "Office Hours",
    line1: "Mon-Sat: 9AM-7PM",
    line2: "Sunday: Closed",
    icon: <FiClock />,
  },
];

const faqs = [
  {
    q: "How do I get started with coaching?",
    a: "You can start by filling out the contact form above. Once we review your goals, we’ll schedule a short consultation and create a personalized plan for you.",
  },
  {
    q: "Do you offer virtual coaching?",
    a: "Yes. Virtual coaching is available through online check-ins, progress tracking, and direct support—so you can get results from anywhere.",
  },
  {
    q: "What is the typical duration of a coaching program?",
    a: "Most clients start with the 90-day transformation program. Depending on your goals, you can extend for continued progress and long-term maintenance.",
  },
  {
    q: "Can I pause my coaching program?",
    a: "Yes. If you have travel, health, or schedule changes, we can pause and resume based on availability and your plan terms.",
  },
  {
    q: "Do you provide nutrition plans?",
    a: "Absolutely. You’ll get a personalized nutrition plan based on your preferences, lifestyle, and goals—plus tracking and adjustments along the way.",
  },
];

function Badge() {
  return (
    <div className="flex justify-center">
      <span className="inline-flex items-center justify-center rounded-full bg-[#4CAF50]/15 border border-[#2E7D32] px-6 py-2 text-[#2E7D32] font-semibold">
        We&apos;re Here to Help
      </span>
    </div>
  );
}

function Header() {
  return (
    <div className="mt-6 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
        Get in <span className="text-[#4CAF50]">Touch</span>
      </h2>
      <p className="mt-4 text-black/75 text-base sm:text-lg leading-relaxed">
        Ready to transform your life? Let&apos;s start the conversation today
      </p>
    </div>
  );
}

function ContactCards() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactCards.map((c) => (
        <div
          key={c.title}
          className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition p-6 text-center"
        >
          <div className="mx-auto w-12 h-12 rounded-xl bg-[#4CAF50] flex items-center justify-center text-white text-xl">
            {c.icon}
          </div>
          <h3 className="mt-4 text-lg font-bold text-black">{c.title}</h3>
          <p className="mt-2 text-black/80 font-medium">{c.line1}</p>
          <p className="mt-1 text-black/60 text-sm">{c.line2}</p>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-black/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white text-xl">
              <FiMessageSquare />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-black">Send a Message</h3>
              <p className="text-black/60">We&apos;ll respond within 24 hours</p>
            </div>
          </div>
        </div>

        <form
          className="p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black">
                First Name
              </label>
              <input type="text" placeholder="Enter first name" className={INPUT} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black">Last Name</label>
              <input type="text" placeholder="Enter last name" className={INPUT} />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">
              Email Address
            </label>
            <input type="email" placeholder="Enter email address" className={INPUT} />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">
              Phone Number
            </label>
            <input type="tel" placeholder="Enter phone number" className={INPUT} />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">
              I&apos;m Interested In
            </label>
            <select className={INPUT}>
              <option value="">Select an option</option>
              <option>90-Day Transformation Program</option>
              <option>Personalized Meal Planning</option>
              <option>Nutrition Counseling</option>
              <option>Weight Management</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="rounded-xl border border-black/10 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#4CAF50]/40"
            />
          </div>

          <button
            type="submit"
            className={cx(
              "mt-7 w-full inline-flex items-center justify-center gap-2",
              "rounded-xl bg-[#4CAF50] px-6 py-3 text-white font-semibold",
              "hover:bg-[#43a047] transition"
            )}
          >
            <FiSend className="text-lg" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            Frequently Asked <span className="text-[#4CAF50]">Questions</span>
          </h2>
          <p className="mt-3 text-black/70 text-base sm:text-lg">
            Quick answers to common questions
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4">
                <span className="font-semibold text-black">{f.q}</span>
                <FiChevronDown className="text-xl text-[#4CAF50] transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-black/70 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="w-full bg-[#2E2E2E] mt-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to Transform Your Health?
        </h3>

        <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Join 200+ successful transformations and start your nutrition journey
          today
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#enroll"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4CAF50] px-7 py-3 text-white font-semibold hover:bg-[#43a047] transition"
          >
            <FiArrowRight className="text-lg" />
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactUS() {
  return (
     <section id="contactus" className="w-full bg-[#F3F7F3] pt-14 sm:pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Badge />
        <Header />
        <ContactCards />
        <ContactForm />
      </div>

      <FAQ />
      <CTA />
    </section>
  );
}