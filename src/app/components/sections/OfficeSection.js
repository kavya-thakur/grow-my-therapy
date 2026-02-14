"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function OfficeSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
    restDelta: 0.001,
  });

  // 1. Dynamic Colors - Smooth transition from Bone to Black
  const bgColor = useTransform(
    smoothProgress,
    [0.1, 0.4],
    ["#F9F7F2", "#0D0D0D"],
  );
  const textColor = useTransform(
    smoothProgress,
    [0.1, 0.4],
    ["#1A1A1A", "#F9F7F2"],
  );
  const subTextColor = useTransform(
    smoothProgress,
    [0.4, 0.6],
    ["#6B705C", "#A3A3A3"],
  );
  const uiLineColor = useTransform(
    smoothProgress,
    [0.1, 0.4],
    ["#1A1A1A", "#FFFFFF"],
  );

  // 2. The Reveal Mask - Inset starts large and shrinks to 0
  const clipPath = useTransform(
    smoothProgress,
    [0.2, 0.6],
    ["inset(20% 20% 20% 20% rounded 40px)", "inset(0% 0% 0% 0% rounded 0px)"],
  );

  const imageScale = useTransform(smoothProgress, [0.2, 0.8], [1.3, 1]);

  // 3. Typographic Motion
  const titleY = useTransform(smoothProgress, [0, 0.5], ["0%", "-10%"]);
  const metaOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* THE MASKED IMAGE */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 z-0 w-full h-full overflow-hidden"
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds Santa Monica Office Interior"
              fill
              className="object-cover brightness-[0.7] contrast-[1.05]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ARTISTIC GRID OVERLAY (Thin elegant lines) */}
        <div className="absolute inset-0 z-10 grid grid-cols-4 px-6 md:px-12 pointer-events-none opacity-20">
          <div
            className="border-x border-current h-full w-full"
            style={{ color: uiLineColor }}
          />
          <div
            className="border-r border-current h-full w-full"
            style={{ color: uiLineColor }}
          />
          <div
            className="border-r border-current h-full w-full"
            style={{ color: uiLineColor }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 w-full max-w-7xl px-8 md:px-16">
          <motion.div
            style={{ y: titleY }}
            className="flex flex-col gap-8 md:gap-16"
          >
            <div className="overflow-hidden">
              <motion.h2
                style={{ color: textColor }}
                className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter"
              >
                <span className="block italic font-light">A Space</span>
                <span className="block ml-[10vw]">to Breathe.</span>
              </motion.h2>
            </div>

            {/* Bottom Meta Data */}
            <div className="flex justify-between items-end mt-12 md:mt-24">
              <motion.div
                style={{ opacity: metaOpacity }}
                className="max-w-[300px]"
              >
                <motion.p
                  style={{ color: subTextColor }}
                  className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
                >
                  Environment / Healing
                </motion.p>
                <motion.p
                  style={{ color: textColor }}
                  className="font-light leading-relaxed text-sm md:text-base opacity-80"
                >
                  Located in the heart of Santa Monica, the office is curated to
                  support nervous system regulation and felt safety.
                </motion.p>
              </motion.div>

              <motion.div
                style={{ opacity: metaOpacity, color: textColor }}
                className="hidden md:block text-right"
              >
                <span className="text-7xl lg:text-9xl font-serif opacity-10">
                  01
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* PROGRESS LINE */}
        <div
          className="absolute bottom-12 right-12 w-48 h-[1px] bg-current opacity-20"
          style={{ color: uiLineColor }}
        >
          <motion.div
            style={{ scaleX: smoothProgress, backgroundColor: uiLineColor }}
            className="w-full h-full origin-left"
          />
        </div>
      </motion.div>
    </section>
  );
}
