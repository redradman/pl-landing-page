"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const words = [
    { text: "FIND", className: "text-white" },
    { text: "YOUR", className: "text-white" },
    { text: "CAREER", className: "text-accent font-bold" },
    { text: "HERE", className: "text-accent font-bold" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-neutral-900 animate-gradient" />
        {/* Background Beams */}
        <BackgroundBeams className="opacity-40" />
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-dot-white/[0.1]" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-bold text-2xl"
          >
            Providence Living
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex gap-8 text-white"
          >
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#prince-george" className="hover:text-accent transition-colors">
              Why PG
            </a>
            <a href="#signup" className="hover:text-accent transition-colors">
              Sign Up
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center"
        >
          {/* Typewriter Title */}
          <div className="mb-4">
            <TypewriterEffectSmooth
              words={words}
              className="text-4xl md:text-6xl lg:text-7xl"
              cursorClassName="bg-accent"
            />
          </div>

          {/* Subtitle with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto"
          >
            Join Prince George's Innovative Healthcare Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Be part of transforming senior care in Northern BC
          </motion.p>

          {/* CTA Buttons with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row gap-6 pt-6 justify-center items-center"
          >
            <MovingBorderButton
              onClick={scrollToSignup}
              borderRadius="1.5rem"
              className="bg-primary dark:bg-primary text-white dark:text-white border-accent hover:bg-primary-light px-12 py-6 text-lg font-semibold"
              containerClassName="w-full sm:w-auto"
              borderClassName="bg-[radial-gradient(var(--accent)_40%,transparent_60%)]"
              duration={3000}
            >
              Get Updates
            </MovingBorderButton>

            <button
              onClick={scrollToAbout}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-transparent px-12 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
            >
              <span className="relative z-10">Learn More ↓</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
}
