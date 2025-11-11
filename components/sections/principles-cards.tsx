'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Home, Compass, Heart, Users, Network } from 'lucide-react';

const principles = [
  {
    title: 'Home is not a place, it\'s a feeling',
    icon: Home,
    hoverText: 'Creating warm, familiar environments where residents truly feel at home',
    color: 'from-[#002D74] to-[#007DA5]',
  },
  {
    title: 'Residents direct each moment',
    icon: Compass,
    hoverText: 'Empowering residents with choice and autonomy in their daily lives',
    color: 'from-[#007DA5] to-[#84A19C]',
  },
  {
    title: 'Emotional connections matter most',
    icon: Heart,
    hoverText: 'Building meaningful relationships between residents, families, and staff',
    color: 'from-[#84A19C] to-[#007DA5]',
  },
  {
    title: 'Human-centred design',
    icon: Users,
    hoverText: 'Every space and process designed with people\'s needs at the forefront',
    color: 'from-[#007DA5] to-[#002D74]',
  },
  {
    title: 'Relationship-centred care',
    icon: Network,
    hoverText: 'Fostering deep, authentic connections in every interaction',
    color: 'from-[#002D74] to-[#84A19C]',
  },
];

export function PrinciplesCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            Our Five Guiding Principles
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            The foundation of our Home for Us philosophy
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:max-w-none' : ''}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                >
                  <Card className="relative overflow-hidden h-full min-h-[280px] border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                    {/* Background Gradient on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 transition-opacity duration-300`}
                      animate={{
                        opacity: hoveredIndex === index ? 0.95 : 0,
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
                      <div>
                        <motion.div
                          className={`mb-4 transition-colors duration-300 ${
                            hoveredIndex === index ? 'text-white' : 'text-[#007DA5]'
                          }`}
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            rotate: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={48} strokeWidth={1.5} />
                        </motion.div>

                        <h3
                          className={`text-xl sm:text-2xl font-semibold mb-3 transition-colors duration-300 ${
                            hoveredIndex === index ? 'text-white' : 'text-[#002D74]'
                          }`}
                        >
                          {principle.title}
                        </h3>
                      </div>

                      <motion.p
                        className="text-sm sm:text-base leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          height: hoveredIndex === index ? 'auto' : 0,
                          color: hoveredIndex === index ? '#ffffff' : '#4B5563',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {principle.hoverText}
                      </motion.p>

                      {hoveredIndex !== index && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-500 italic"
                        >
                          Hover to learn more
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
