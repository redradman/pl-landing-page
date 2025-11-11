'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, MapPin, GraduationCap, Home } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    label: 'Comox Facility Opens',
    description: 'Our first H4U home welcomes residents',
    icon: CheckCircle,
    status: 'complete',
  },
  {
    year: '2025',
    label: 'Building Community',
    description: 'Connecting with future team members',
    icon: MapPin,
    status: 'current',
  },
  {
    year: '2026',
    label: 'Training & Development',
    description: 'Preparing our inaugural Prince George team',
    icon: GraduationCap,
    status: 'future',
  },
  {
    year: 'Fall 2027',
    label: 'Prince George Opens',
    description: 'Welcoming residents to their new home',
    icon: Home,
    status: 'future',
  },
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#002D74] mb-4">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From vision to reality
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-gradient-to-r from-[#002D74] to-[#007DA5]"
                initial={{ width: '0%' }}
                animate={isInView ? { width: '33.33%' } : { width: '0%' }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            {/* Timeline Events */}
            <div className="grid grid-cols-4 gap-4">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isComplete = event.status === 'complete';
                const isCurrent = event.status === 'current';

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Icon Circle */}
                    <motion.div
                      className={`relative z-10 w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg ${
                        isComplete
                          ? 'bg-gradient-to-br from-[#002D74] to-[#007DA5]'
                          : isCurrent
                          ? 'bg-gradient-to-br from-[#007DA5] to-[#84A19C]'
                          : 'bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon
                        className={
                          isComplete || isCurrent ? 'text-white' : 'text-gray-400'
                        }
                        size={48}
                      />
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-[#007DA5]"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold mb-2 ${
                          isComplete || isCurrent
                            ? 'text-[#002D74]'
                            : 'text-gray-400'
                        }`}
                      >
                        {event.year}
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isComplete || isCurrent
                            ? 'text-[#007DA5]'
                            : 'text-gray-500'
                        }`}
                      >
                        {event.label}
                      </h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200">
              <motion.div
                className="w-full bg-gradient-to-b from-[#002D74] to-[#007DA5]"
                initial={{ height: '0%' }}
                animate={isInView ? { height: '25%' } : { height: '0%' }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isComplete = event.status === 'complete';
                const isCurrent = event.status === 'current';

                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Icon Circle */}
                    <motion.div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 ${
                        isComplete
                          ? 'bg-gradient-to-br from-[#002D74] to-[#007DA5]'
                          : isCurrent
                          ? 'bg-gradient-to-br from-[#007DA5] to-[#84A19C]'
                          : 'bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon
                        className={
                          isComplete || isCurrent ? 'text-white' : 'text-gray-400'
                        }
                        size={28}
                      />
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-[#007DA5]"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div
                        className={`text-xl font-bold mb-1 ${
                          isComplete || isCurrent
                            ? 'text-[#002D74]'
                            : 'text-gray-400'
                        }`}
                      >
                        {event.year}
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isComplete || isCurrent
                            ? 'text-[#007DA5]'
                            : 'text-gray-500'
                        }`}
                      >
                        {event.label}
                      </h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
