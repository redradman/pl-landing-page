"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Main-Entrance-1920-1200x675.jpg"
          alt="Providence Living facility entrance"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/80 to-primary/70" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-sm">
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
            className="hidden md:flex gap-8 text-white/90 text-sm font-medium"
          >
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#prince-george" className="hover:text-white transition-colors">
              Why Prince George
            </a>
            <a href="#signup" className="hover:text-white transition-colors">
              Join Us
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center text-center min-h-[calc(100vh-88px)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl space-y-8"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                       bg-white/10 backdrop-blur-md border border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-white text-sm font-semibold">Opening 2027 in Prince George, BC</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Transform Senior Care in{" "}
            <span className="bg-gradient-to-r from-accent-200 to-accent bg-clip-text text-transparent">
              Northern BC
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Join our innovative healthcare team bringing the Home for Us care model
            to Prince George. Be part of transforming the future of senior living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Primary CTA */}
            <button
              onClick={scrollToSignup}
              className="group w-full sm:w-auto px-10 py-5 rounded-xl
                         bg-primary hover:bg-primary-600
                         text-white font-semibold text-lg
                         shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                         transition-all duration-300
                         flex items-center justify-center gap-3"
            >
              Get Updates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToAbout}
              className="group w-full sm:w-auto px-10 py-5 rounded-xl
                         bg-transparent hover:bg-white/10
                         text-white font-semibold text-lg
                         border-2 border-white/40 hover:border-white/60
                         transition-all duration-300
                         flex items-center justify-center gap-3"
            >
              Learn More
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-16 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center text-white/90"
          >
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">100+</div>
              <div className="text-sm font-medium opacity-80">Positions Available</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">12</div>
              <div className="text-sm font-medium opacity-80">Resident Households</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">2027</div>
              <div className="text-sm font-medium opacity-80">Grand Opening</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="text-white/60 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
