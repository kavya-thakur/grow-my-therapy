"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const title = "Anxiety & Trauma Therapy in Santa Monica, CA";
  const words = title.split(" ");

  const paragraphLines = [
    "Compassionate, evidence-based therapy for adults",
    "navigating anxiety, burnout, and the lasting",
    "impact of trauma.",
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F9F7F2] overflow-hidden pt-30 pb-12 md:pt-5 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative flex justify-center items-center order-2 md:order-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden "
            >
              <Image
                src="/images/dr.png"
                alt="Dr. Maya Reynolds - Psychologist in Santa Monica"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left order-1 md:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#6B705C] font-bold mb-4"
            >
              Licensed Clinical Psychologist
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-serif font-medium leading-[1.1] sm:leading-[1.2] mb-6 text-[#1A1A1A]">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden mr-2 sm:mr-3"
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.06,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className="mb-8 max-w-[380px] sm:max-w-md lg:max-w-lg">
              {paragraphLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.p
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="text-sm sm:text-lg md:text-xl text-neutral-600 font-light leading-snug"
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#1A1A1A] text-white rounded-full overflow-hidden transition-all duration-300 shadow-md"
              >
                <span className="relative z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                  Schedule a Consultation
                </span>
                <div className="absolute inset-0 bg-[#6B705C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
