"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, Home, Heart, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function WhyPrinceGeorge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Mountain,
      title: "Outdoor Adventure",
      description: "4-season recreation",
      detail: "World-class skiing, hiking, and outdoor activities year-round",
    },
    {
      icon: Home,
      title: "37.6% Housing",
      description: "Affordability vs 133% Vancouver",
      detail: "Own a home and build your future in an affordable city",
    },
    {
      icon: Heart,
      title: "Family Friendly",
      description: "Community",
      detail: "Growing community with young families and excellent amenities",
    },
    {
      icon: GraduationCap,
      title: "UNBC & CNC",
      description: "Education",
      detail: "Access to quality education and professional development",
    },
  ];

  return (
    <section id="prince-george" className="py-24 md:py-32 bg-accent-light relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary mb-4">
            LIVE, WORK, THRIVE IN PRINCE GEORGE
          </h2>
          <div className="h-1 w-64 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-lg font-semibold text-accent">
                      {benefit.description}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Facility & Location Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/prince_george_facility_from_top.jpg"
              alt="Providence Living Prince George facility aerial view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white space-y-1">
                <p className="text-2xl font-bold">Your Future Home</p>
                <p className="text-lg">State-of-the-art facility opening 2027</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/Rodello-Street-View.jpg"
              alt="Prince George downtown"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white space-y-1">
                <p className="text-2xl font-bold">Discover Prince George</p>
                <p className="text-lg">Vibrant city with outdoor adventures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
