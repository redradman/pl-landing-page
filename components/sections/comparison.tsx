'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D74] mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A fundamental shift in how we approach senior care
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional LTC Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-10 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-500 mb-8">
              Traditional LTC Model
            </h3>
            <ul className="space-y-4">
              {traditionalModel.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <X className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Home for Us Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#002D74] to-[#007DA5] rounded-3xl p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Home for Us Model
              </h3>
              <span className="bg-[#84A19C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Our Approach
              </span>
            </div>
            <ul className="space-y-4">
              {h4uModel.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#84A19C] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
