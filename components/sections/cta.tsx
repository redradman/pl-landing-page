'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002D74] via-[#007DA5] to-[#84A19C]">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-20 left-20 text-white/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-white/20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Be Part of Something
            <br />
            <span className="bg-gradient-to-r from-white to-[#84A19C] bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a team that's redefining what it means to provide senior care
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#002D74] hover:bg-[#84A19C] hover:text-white text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <motion.span
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>Express Interest Now</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>

          {/* Stats or highlights */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#84A19C]">
                2024
              </div>
              <div className="text-base sm:text-lg opacity-90">
                First H4U home opened
              </div>
            </motion.div>

            <motion.div
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#84A19C]">
                5 Years
              </div>
              <div className="text-base sm:text-lg opacity-90">
                UBC/SFU research study
              </div>
            </motion.div>

            <motion.div
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#84A19C]">
                Fall 2027
              </div>
              <div className="text-base sm:text-lg opacity-90">
                Prince George opening
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
