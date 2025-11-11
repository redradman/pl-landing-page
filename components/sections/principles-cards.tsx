'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Compass, Heart, Users, Network } from 'lucide-react';

const principles = [
  {
    title: 'Home is not a place, it\'s a feeling',
    icon: Home,
    description: 'Creating warm, familiar environments where residents truly feel at home',
  },
  {
    title: 'Residents direct each moment',
    icon: Compass,
    description: 'Empowering residents with choice and autonomy in their daily lives',
  },
  {
    title: 'Emotional connections matter most',
    icon: Heart,
    description: 'Building meaningful relationships between residents, families, and staff',
  },
  {
    title: 'Human-centred design',
    icon: Users,
    description: 'Every space and process designed with people\'s needs at the forefront',
  },
  {
    title: 'Relationship-centred care',
    icon: Network,
    description: 'Fostering deep, authentic connections in every interaction',
  },
];

export function PrinciplesCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D74] mb-4">
            Our Five Guiding Principles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The foundation of our Home for Us philosophy
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#84A19C] transition-all duration-300 group hover:shadow-lg">
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-[#84A19C]/10 flex items-center justify-center group-hover:bg-[#84A19C] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#002D74] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-[#002D74]">
                    {principle.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
