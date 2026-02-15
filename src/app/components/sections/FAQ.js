"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const blurRevealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer both in-person and virtual sessions?",
      answer:
        "Yes. I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located in California.",
    },
    {
      question: "What approaches do you use in therapy?",
      answer:
        "My work integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques to support both emotional insight and nervous system regulation.",
    },
    {
      question: "How long does therapy usually last?",
      answer:
        "The length of therapy varies depending on your goals. Some clients benefit from short-term structured work, while others engage in deeper, longer-term therapy.",
    },
    {
      question: "How do I know if we’re a good fit?",
      answer:
        "I offer an initial consultation so we can discuss your concerns and determine whether my approach feels aligned with your needs.",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F7F2] overflow-hidden">
      <motion.div
        layout
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          variants={blurRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/faq.png"
              alt="Calm consultation space in Santa Monica"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </motion.div>

        {/* ================= FAQ CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="order-1 lg:order-2"
        >
          <motion.span
            variants={blurRevealVariants}
            className="text-[10px] tracking-[0.4em] text-[#6B705C] font-bold mb-6 block uppercase"
          >
            Common Inquiries
          </motion.span>

          <motion.h2
            variants={blurRevealVariants}
            className="text-4xl md:text-5xl font-serif font-light leading-tight mb-12 text-[#1A1A1A]"
          >
            Questions <span className="italic"> & </span> Answers
          </motion.h2>

          <div className="divide-y divide-black/10 border-t border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={blurRevealVariants}
                  className="py-6"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left group cursor-pointer"
                  >
                    <span
                      className={`text-lg md:text-xl font-serif transition-all duration-500 pr-8 ${
                        isOpen
                          ? "text-[#6B705C] translate-x-2"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div className="relative w-6 h-6 flex-shrink-0">
                      <motion.span
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          backgroundColor: isOpen ? "#6B705C" : "#1A1A1A",
                        }}
                        className="absolute top-1/2 left-0 h-[1px] w-full"
                      />
                      <motion.span
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          opacity: isOpen ? 0 : 1,
                          backgroundColor: isOpen ? "#6B705C" : "#1A1A1A",
                        }}
                        className="absolute left-1/2 top-0 w-[1px] h-full"
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <div className="pt-6 pb-2">
                          <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg max-w-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
