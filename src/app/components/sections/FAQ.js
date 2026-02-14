
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
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

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24  bg-[#F9F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ================= IMAGE SIDE ================= */}
        {/* Changed from items-center to items-start so the image stays anchored while FAQs expand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/faq.png"
              alt="Calm consultation space in Santa Monica"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </motion.div>

        {/* ================= FAQ CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#6B705C] font-bold mb-6 block uppercase">
            Common Inquiries
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-12 text-[#1A1A1A]">
            Questions <span className="italic"> & </span> Answers
          </h2>

          <div className="divide-y divide-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left group transition-colors"
                  >
                    <span
                      className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? "text-[#6B705C]" : "text-[#1A1A1A]"}`}
                    >
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="ml-4 flex-shrink-0"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4V16M4 10H16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <div className="pt-4 pb-2">
                          <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg max-w-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
