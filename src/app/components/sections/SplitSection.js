"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CONTENT = {
  subtitle: "SUPPORT FOR OVERWHELM",
  title: (
    <>
      You don’t have to keep <br className="hidden md:block" />
      <span className="italic">pushing through alone.</span>
    </>
  ),
  paragraphs: [
    "Many high-achieving adults feel outwardly capable while internally carrying persistent anxiety, tension, and mental exhaustion.",
    "Therapy offers a space to slow down, regulate your nervous system, and rebuild a sense of steadiness in daily life.",
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function SplitSection() {
  return (
    <section className="min-h-screen py-20 md:py-0 flex justify-center items-center bg-[#EAE4D3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-27 items-center">
        {/* ================= TEXT SIDE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.03 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm tracking-widest text-[var(--color-primary)] mb-4"
          >
            {CONTENT.subtitle}
          </motion.p>

          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tighter mb-8 leading-[1.15] text-obsidian"
          >
            {CONTENT.title}
          </motion.h2>

          {CONTENT.paragraphs.map((text, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`text-base md:text-lg text-[var(--color-text-muted)] ${
                index === 0 ? "mb-6" : ""
              }`}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ clipPath: "inset(0% 0% 20% 0%)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="relative w-full h-[50vh] md:h-[70vh]"
          >
            <Image
              src="/images/furniture2.png"
              alt="Therapy support"
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
