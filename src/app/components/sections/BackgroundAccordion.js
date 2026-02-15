"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundAccordion() {
  const items = [
    {
      id: "01",
      title: "Education",
      content:
        "Doctor of Psychology (PsyD) in Clinical Psychology with specialized training in trauma-informed care, EMDR, and cognitive-behavioral therapy.",
    },
    {
      id: "02",
      title: "Experience",
      content:
        "Extensive experience supporting adults navigating anxiety, trauma, burnout, and high internal pressure in both private practice and clinical settings.",
    },
    {
      id: "03",
      title: "Approach",
      content:
        "A collaborative, grounded approach integrating CBT, EMDR, mindfulness-based practices, and body-oriented techniques to support emotional regulation and resilience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Tagline for Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#6B705C] font-bold uppercase">
            Credentials & Expertise
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-20 text-[#1A1A1A]"
        >
          Professional <span className="italic">Background</span>
        </motion.h2>

        <div className="border-t border-[#1A1A1A]/10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#1A1A1A]/10 transition-colors duration-500"
                style={{
                  backgroundColor: isOpen
                    ? "rgba(107, 112, 92, 0.03)"
                    : "transparent",
                }}
              >
                <div className="px-2">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left py-8 cursor-pointer group"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-[10px] font-bold tracking-widest text-[#6B705C] opacity-50">
                        {item.id}
                      </span>
                      <span
                        className={`text-xl md:text-2xl font-serif transition-all duration-300 ${isOpen ? "translate-x-2 text-[#6B705C]" : "text-[#1A1A1A]"}`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        className="absolute h-[1px] w-full bg-[#1A1A1A]"
                      />
                      <motion.span
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          opacity: isOpen ? 0 : 1,
                        }}
                        className="absolute w-[1px] h-full bg-[#1A1A1A]"
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-10 pl-[54px] md:pl-[104px] pr-6">
                          <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg max-w-2xl">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
