'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    year: '2024',
    label: 'Comox Facility Opens',
    description: 'Our first H4U home welcomes residents',
    status: 'complete',
  },
  {
    year: '2025',
    label: 'Building Community',
    description: 'Connecting with future team members',
    status: 'current',
  },
  {
    year: '2026',
    label: 'Training & Development',
    description: 'Preparing our inaugural Prince George team',
    status: 'future',
  },
  {
    year: 'Fall 2027',
    label: 'Prince George Opens',
    description: 'Welcoming residents to their new home',
    status: 'future',
  },
];

export function Timeline() {
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
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            From vision to reality
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-200 hidden lg:block">
            <motion.div
              className="h-full bg-[#002D74]"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '33.33%' } : { width: '0%' }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {/* Timeline Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => {
              const isComplete = event.status === 'complete';
              const isCurrent = event.status === 'current';

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      isComplete || isCurrent
                        ? 'bg-[#002D74]'
                        : 'bg-gray-200'
                    }`}>
                      <div className="text-white font-bold text-sm">{event.year.includes('Fall') ? '27' : event.year}</div>
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-[#84A19C]"
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
                    </div>

                    {/* Content */}
                    <div className="text-lg font-bold text-[#002D74] mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-base font-semibold text-[#007DA5] mb-2">
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
    </section>
  );
}
