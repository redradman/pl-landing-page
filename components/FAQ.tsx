"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "When will the facility open?",
      answer:
        "The Providence Living Prince George facility is scheduled to open in 2027. We're currently in the planning and construction phases, and we'll be sharing updates regularly with our community of interested candidates.",
    },
    {
      question: "What positions will be available?",
      answer:
        "We're hiring for 100+ positions across all levels of care including Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Care Aides, Recreation Therapists, Kitchen Staff, Maintenance, and Administration. Both full-time and part-time positions will be available.",
    },
    {
      question: "Do you offer relocation support?",
      answer:
        "Yes! We offer comprehensive relocation assistance including moving expense reimbursement, temporary accommodation support, and signing bonuses for qualified candidates. We understand that moving to Prince George is a big decision and we're here to support you.",
    },
    {
      question: "What about training and orientation?",
      answer:
        "All new team members receive comprehensive onboarding including training on the Home for Us model, our care philosophy, and job-specific skills development. We also offer ongoing education support, mentorship programs, and professional development opportunities.",
    },
    {
      question: "What makes the Home for Us model different?",
      answer:
        "The Home for Us (H4U) model focuses on creating small, household-style living environments with just 12 residents per home. This allows for deeper relationships, resident-directed care, and a true home atmosphere rather than an institutional setting. Staff work collaboratively within each household, providing holistic, relationship-centered care.",
    },
    {
      question: "What are the benefits and compensation like?",
      answer:
        "We offer competitive salaries aligned with BC healthcare standards, comprehensive health and dental benefits, pension plan participation, education funding, paid time off, and wellness programs. Specific compensation details will be shared during the recruitment process.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary mb-4">
              YOUR QUESTIONS ANSWERED
            </h2>
            <div className="h-1 w-48 bg-accent mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gray-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
            >
              Contact Us →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
