"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutFacility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Home for Us Model",
    "12-person households",
    "Resident-led care",
    "Home-like design",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Images in masonry layout */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 rounded-md overflow-hidden bg-gradient-to-br from-primary-light to-accent shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <p className="text-primary font-semibold text-lg">Bistro Dining Area</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-48 rounded-md overflow-hidden bg-gradient-to-br from-accent to-primary shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                  <p className="text-primary font-semibold text-center px-2">Garden Space</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative h-48 rounded-md overflow-hidden bg-gradient-to-br from-primary to-primary-light shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <p className="text-primary font-semibold text-center px-2">Art Studio</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-display-lg font-bold text-primary mb-2">
                A NEW STANDARD
              </h2>
              <div className="h-1 w-32 bg-accent mb-4" />
              <h3 className="text-2xl md:text-display-md font-bold text-gray-900">
                IN SENIOR CARE
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Opening 2027 in Prince George
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-800">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 mt-4"
            >
              Explore the Facility →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
