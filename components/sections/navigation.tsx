'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#002D74] to-[#007DA5] flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">PL</span>
            </div>
            <div className="hidden sm:block">
              <h2
                className={`font-semibold text-lg transition-colors duration-300 ${
                  isScrolled ? 'text-[#002D74]' : 'text-white'
                }`}
              >
                Providence Living
              </h2>
            </div>
          </motion.div>

          {/* CTA Button */}
          <Button
            onClick={scrollToForm}
            className="bg-[#007DA5] hover:bg-[#002D74] text-white transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
            size="lg"
          >
            Express Interest
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
