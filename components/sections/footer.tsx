'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[#002D74] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007DA5] to-[#84A19C] flex items-center justify-center">
                <span className="text-white font-bold text-xl">PL</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Providence Living</h3>
              </div>
            </div>
            <p className="text-white/80 text-base sm:text-lg">
              Transforming Senior Care in British Columbia
            </p>
          </motion.div>

          {/* Right Side - Links */}
          <motion.div
            className="flex flex-wrap gap-6 md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-white/80 hover:text-[#84A19C] transition-colors duration-300 text-sm sm:text-base"
            >
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="text-white/80 hover:text-[#84A19C] transition-colors duration-300 text-sm sm:text-base"
            >
              Terms
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="text-white/80 hover:text-[#84A19C] transition-colors duration-300 text-sm sm:text-base"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 h-px bg-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          className="text-center text-white/60 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Providence Living. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
