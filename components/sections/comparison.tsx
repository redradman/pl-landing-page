'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { X, Check } from 'lucide-react';

const traditionalModel = [
  'Hospital-like routines',
  'Task-focused care',
  'Limited personalization',
  'Institutional environment',
];

const h4uModel = [
  'Flexible, resident-led schedules',
  'Relationship-focused care',
  'Highly personalized experiences',
  'Home-like atmosphere',
];

export function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#002D74] mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A fundamental shift in how we approach senior care
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional LTC Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full p-6 sm:p-8 bg-gray-100 border-gray-300">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-6">
                Traditional LTC Model
              </h3>
              <ul className="space-y-4">
                {traditionalModel.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <X className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Home for Us Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full p-6 sm:p-8 bg-gradient-to-br from-[#002D74] to-[#007DA5] border-none shadow-xl relative overflow-hidden">
              {/* Highlight Effect */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Home for Us Model
                </h3>
                <div className="inline-block bg-[#84A19C] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-6">
                  Our Approach
                </div>
                <ul className="space-y-4">
                  {h4uModel.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Check className="w-6 h-6 text-[#84A19C] flex-shrink-0 mt-0.5" />
                      <span className="text-white text-base sm:text-lg font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </Card>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-[#007DA5] font-semibold">
            Be part of the transformation in senior care
          </p>
        </motion.div>
      </div>
    </section>
  );
}
