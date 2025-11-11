'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const keyPoints = [
  'Social-relational care model, not institutional',
  'Backed by 5-year UBC/SFU research study',
  'Join a team of inspired, like-minded professionals',
];

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D74] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A New Model of Care
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Providence Living is pioneering the Home for Us (H4U) initiative - a transformative approach to long-term senior care. Following our successful launch in Comox (2024), we're bringing this revolutionary model to Prince George in Fall 2027.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#84A19C]/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#002D74]" />
                  </div>
                  <p className="text-gray-700 text-base">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-[#002D74] to-[#007DA5] p-12">
              <div className="text-white">
                <div className="text-7xl font-bold mb-4 text-[#84A19C]">H4U</div>
                <h3 className="text-3xl font-semibold mb-4">Home for Us</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  A model centered on creating meaningful relationships and personalized experiences, where residents feel truly at home.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
