"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [{ name: "Blog", href: "blog" }];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#F9F7F2]/10 backdrop-blur-sm border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex flex-col cursor-pointer z-[110]"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h2 className="text-lg font-serif font-light text-[#1A1A1A]">
            Dr. Maya Reynolds <span className="italic">PsyD</span>
          </h2>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A]/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-[#6B705C] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="px-6 py-2.5 border border-[#1A1A1A] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            Book a Call
          </a>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 z-[110] relative"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            className="h-[1px] w-full bg-[#1A1A1A] origin-center"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="h-[1px] w-full bg-[#1A1A1A]"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            className="h-[1px] w-full bg-[#1A1A1A] origin-center"
          />
        </button>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen w-full bg-[#F9F7F2] z-[105] flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-serif text-[#1A1A1A]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="mt-4 px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-xs tracking-widest uppercase font-bold"
              >
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
