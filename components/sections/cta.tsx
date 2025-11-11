'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-br from-[#002D74] to-[#007DA5]"
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Be Part of Something Extraordinary
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join a team that's redefining what it means to provide senior care
          </p>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-white text-[#002D74] hover:bg-[#84A19C] hover:text-white text-base font-medium px-8 py-6 rounded-full group transition-all duration-300"
          >
            Join Our Newsletter
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
