'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002D74] via-[#003A8C] to-[#007DA5] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Shape the Future of{' '}
            <span className="text-[#84A19C]">Senior Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join Providence Living's revolutionary Home for Us model in Prince George.
            Where every day is a day well lived. <span className="font-semibold text-white">Opening Fall 2027.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#002D74] hover:bg-[#84A19C] hover:text-white text-base font-medium px-8 py-6 rounded-full group transition-all duration-300"
            >
              Join Our Newsletter
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#84A19C] mb-2">2024</div>
              <div className="text-sm sm:text-base text-white/70">First H4U home opened</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#84A19C] mb-2">5 Years</div>
              <div className="text-sm sm:text-base text-white/70">UBC/SFU research study</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#84A19C] mb-2">Fall 2027</div>
              <div className="text-sm sm:text-base text-white/70">Prince George opening</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
