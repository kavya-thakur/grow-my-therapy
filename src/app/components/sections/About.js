"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24 md:py-32 bg-oak overflow-hidden">
      {/* Soft background accent - simplified for cleaner look */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6B705C] opacity-[0.03] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* ================= TEXT SIDE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[10px] tracking-[0.4em] text-[#6B705C] font-bold mb-4"
          >
            MEET THE DOCTOR
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-8 text-[#1A1A1A]"
          >
            Hi, I’m <span className="italic">Dr. Maya Reynolds</span>
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="space-y-6 text-neutral-600 text-base md:text-lg font-light leading-relaxed max-w-lg"
          >
            <p>
              I’m a licensed clinical psychologist in Santa Monica working with
              adults navigating anxiety, burnout, and the lingering impact of
              trauma.
            </p>

            <p>
              My work blends evidence-based approaches like{" "}
              <strong className="font-medium text-[#1A1A1A]">
                CBT and EMDR
              </strong>{" "}
              with nervous system regulation and mindfulness-based practices.
            </p>

            <p>
              Together, we build steadiness, clarity, and a deeper sense of
              resilience that extends beyond the therapy room.
            </p>
          </motion.div>

          {/* Refined Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10"
          >
            <button className="group relative inline-flex items-center gap-4 text-[11px] tracking-[0.2em] font-semibold text-[#1A1A1A]">
              <span className="relative">
                LEARN MORE ABOUT MY APPROACH
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#1A1A1A]/20 transition-all duration-400 group-hover:bg-[#1A1A1A]" />
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-100">
            <Image
              src="/images/dr.png"
              alt="Dr. Maya Reynolds - Psychologist Santa Monica"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-[4s]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
