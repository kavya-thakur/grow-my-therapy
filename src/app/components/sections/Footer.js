"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Brand Identity Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-6">
                Dr. Maya Reynolds, <span className="italic">PsyD</span>
              </h3>
              <p className="text-[#F9F7F2]/60 font-light max-w-sm leading-relaxed text-sm md:text-base">
                Clinical Psychologist specializing in EMDR and Trauma Recovery.
                Providing grounded, evidence-based care for individuals in Santa
                Monica and throughout California via Telehealth.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#6B705C] font-bold mb-8">
              Practice
            </h4>
            <nav className="flex flex-col gap-4 text-[13px] tracking-wide font-light">
              {["About", "Approach", "Specialties", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[#F9F7F2]/70 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Location Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#6B705C] font-bold mb-8">
              Location
            </h4>
            <address className="not-italic font-light leading-relaxed text-[#F9F7F2]/70 text-[13px] tracking-wide">
              Santa Monica Professional Suites
              <br />
              1234 Ocean Ave, Suite 45
              <br />
              Santa Monica, CA 90401
              <br />
              <button
                onClick={scrollToTop}
                className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#6B705C] hover:text-[#F9F7F2] transition-colors group"
              >
                Back to Top
                <span className="group-hover:-translate-y-1 transition-transform duration-300">
                  ↑
                </span>
              </button>
            </address>
          </div>
        </div>

        {/* Legal & Fine Print */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] tracking-[0.25em] text-[#F9F7F2]/30 uppercase">
              © {new Date().getFullYear()} Dr. Maya Reynolds
            </p>
            <p className="text-[9px] tracking-[0.1em] text-[#F9F7F2]/20 uppercase">
              Resilience Through Depth • Licensed Clinical Psychologist
            </p>
          </div>

          <div className="flex gap-10 text-[10px] tracking-[0.25em] text-[#F9F7F2]/30 uppercase">
            <a href="#" className="hover:text-[#F9F7F2] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F9F7F2] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
