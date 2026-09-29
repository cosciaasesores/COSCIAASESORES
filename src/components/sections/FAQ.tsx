"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs, type FaqBlock } from "@/data/faq";

function Answer({ blocks }: { blocks: FaqBlock[] }) {
    return (
        <div className="space-y-3">
            {blocks.map((block, i) => {
                if (block.type === "p") return <p key={i}>{block.text}</p>;
                if (block.type === "section") {
                    return (
                        <div key={i} className="space-y-1">
                            <p className="font-bold text-brand-navy/80">• {block.title}</p>
                            <p className="pl-4">{block.text}</p>
                        </div>
                    );
                }
                return (
                    <ul key={i} className="list-none space-y-1">
                        {block.items.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                );
            })}
        </div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-24 bg-white relative font-sans scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                        Preguntas <span className="text-brand-blue">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md
                                ${openIndex === index
                                    ? "bg-white border-brand-blue/30"
                                    : "bg-white border-slate-200 hover:bg-slate-50"
                                }`
                            }
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                                className="w-full p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                            >
                                <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? "text-brand-blue" : "text-brand-navy"}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-2 rounded-full shrink-0 transition-colors ${openIndex === index ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-body"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-brand-body leading-relaxed border-t border-slate-100 pt-4">
                                            <Answer blocks={item.a} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
