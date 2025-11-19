"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">Providence Living</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming senior care through the Home for Us model in Prince George, BC.
            </p>
          </motion.div>

          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#h4u"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  H4U Model
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-1">Email:</p>
              <a
                href="mailto:careers@providenceliving.ca"
                className="hover:text-accent transition-colors"
              >
                careers@providenceliving.ca
              </a>
            </div>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Indigenous Acknowledgment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mb-8"
        >
          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto text-center">
            We acknowledge that Providence Living operates on the traditional territories of
            the Lheidli T'enneh people. We are grateful for the opportunity to work on this
            land and commit to building relationships based on respect and partnership.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          <p>© {currentYear} Providence Living. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
