"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Specialties() {
  const services = [
    {
      title: "Anxiety & Panic",
      description:
        "Support for persistent worry, racing thoughts, physical tension, and panic symptoms that interfere with daily life.",
      image: "/images/anx.png",
    },
    {
      title: "Trauma & EMDR",
      description:
        "Carefully paced trauma therapy using evidence-based approaches to restore safety and emotional regulation.",
      image: "/images/trauma.png",
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "Therapy for high-achieving adults navigating exhaustion, pressure, and the constant drive to push harder.",
      image: "/images/burnout.png",
    },
  ];

  return (
    <section id="specialties" className="py-24 md:py-32 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] text-[#6B705C] font-bold mb-6 uppercase"
          >
            Areas of Focus
          </motion.p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1A1A1A]">
            Specialized <span className="italic">Support</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden bg-neutral-200 shadow-xl"
            >
              {/* Image with subtle zoom */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Sophisticated Overlay: Darker at bottom for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Panel */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <div className="h-[1px] w-12 bg-[#6B705C] mb-4 group-hover:w-full transition-all duration-700" />

                  <p className="text-[#F9F7F2]/80 text-sm md:text-base font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>

              {/* Subtle architectural border */}
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
