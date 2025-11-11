'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const keyPoints = [
  'Social-relational care model, not institutional',
  'Backed by 5-year UBC/SFU research study',
  'Join a team of inspired, like-minded professionals',
];

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#002D74] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A New Model of Care
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Providence Living is pioneering the Home for Us (H4U) initiative - a transformative approach to long-term senior care. Following our successful launch in Comox (2024), we're bringing this revolutionary model to Prince George in Fall 2027.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#007DA5] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-base sm:text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#002D74] to-[#007DA5] p-8 sm:p-12">
              <motion.div
                className="text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-6xl sm:text-7xl font-bold mb-4 text-[#84A19C]">H4U</div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Home for Us</h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  A model centered on creating meaningful relationships and personalized experiences, where residents feel truly at home.
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-[#84A19C]/20 rounded-full -mr-16 -mt-16"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
