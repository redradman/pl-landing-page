'use client';

import { useState, useEffect } from 'react';
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#002D74] flex items-center justify-center">
              <span className="text-white font-semibold text-sm">PL</span>
            </div>
            <div>
              <h2
                className={`font-semibold text-base transition-colors duration-300 ${
                  isScrolled ? 'text-[#002D74]' : 'text-white'
                }`}
              >
                Providence Living
              </h2>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToForm}
            className="bg-[#002D74] hover:bg-[#007DA5] text-white transition-all duration-300 px-6 py-5 text-sm font-medium rounded-full"
          >
            Join Newsletter
          </Button>
        </div>
      </div>
    </nav>
  );
}
