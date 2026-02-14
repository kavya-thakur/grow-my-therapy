"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#6B705C] text-[#F9F7F2]">
      {/* Organic Grain/Noise Texture for a high-end feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')]" />

      {/* Subtle radial glow to draw the eye to the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-70 mb-6 block"
        >
          Take the first step
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8"
        >
          Begin your path toward <br className="hidden md:block" />
          <span className="italic">greater ease.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-xl font-light text-[#F9F7F2]/80 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          If you’re ready to feel more grounded and supported, I invite you to
          schedule a consultation and take the next step toward meaningful
          change.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 bg-[#F9F7F2] text-[#1A1A1A] px-12 py-5 rounded-full text-[11px] tracking-[0.25em] font-semibold transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          >
            <span>SCHEDULE A CONSULTATION</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2 text-lg">
              →
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-[10px] tracking-widest opacity-50 uppercase"
          >
            Currently accepting new clients in California
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
