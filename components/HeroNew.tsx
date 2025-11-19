"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Spotlight } from "@/components/ui/spotlight";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Wavy animated background */}
      <WavyBackground
        className="absolute inset-0"
        colors={["#003DA5", "#4A6FB5", "#00ABC8", "#003DA5"]}
        waveWidth={50}
        backgroundFill="transparent"
        blur={10}
        speed="fast"
        waveOpacity={0.3}
        containerClassName="absolute inset-0"
      >
        {/* Spotlights for dramatic effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
        <Spotlight className="top-28 right-20 md:right-60" fill="blue" />

        {/* Navigation */}
        <nav className="absolute top-0 w-full z-50">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white font-bold text-2xl drop-shadow-lg"
            >
              Providence Living
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex gap-8 text-white"
            >
              <a href="#about" className="hover:text-accent transition-colors drop-shadow">
                About
              </a>
              <a href="#prince-george" className="hover:text-accent transition-colors drop-shadow">
                Why PG
              </a>
              <a href="#signup" className="hover:text-accent transition-colors drop-shadow">
                Sign Up
              </a>
            </motion.div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center space-y-8 max-w-6xl"
          >
            {/* Main Headline with Highlight */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform Senior Care in{" "}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent drop-shadow-glow">
                Prince George
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-4xl mx-auto drop-shadow-lg"
            >
              Join an innovative healthcare team bringing the{" "}
              <span className="font-semibold text-accent-200">Home for Us</span> model to Northern BC
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              {/* Primary CTA - Glassmorphism */}
              <button
                onClick={scrollToSignup}
                className="group relative px-10 py-5 rounded-2xl overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75" />

                {/* Button body */}
                <div className="relative px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold text-lg
                                shadow-lg shadow-primary-500/50 group-hover:scale-[1.02] transition-transform duration-300
                                flex items-center gap-3">
                  Get Updates
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Secondary CTA - Glass */}
              <button
                onClick={scrollToAbout}
                className="group relative px-10 py-5"
              >
                <div className="relative px-8 py-4 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/30
                                text-white font-semibold text-lg hover:bg-white/20 hover:border-white/50
                                transition-all duration-300 flex items-center gap-3">
                  Learn More
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </div>
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                              bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                <span className="text-white/90 text-sm font-medium">
                  Opening 2027 • 100+ Positions Available
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={scrollToAbout}
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </WavyBackground>
    </section>
  );
}
