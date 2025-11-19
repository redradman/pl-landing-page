"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Coffee, Palette, Home, Users, Sparkles, Calendar } from "lucide-react";
import Image from "next/image";

export default function AboutFacility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Coffee,
      title: "Bistro Dining",
      description: "Community gathering space with cafe-style dining experiences",
      className: "md:col-span-2",
      gradient: "from-amber-400/20 via-orange-400/20 to-yellow-400/20",
      image: "/images/Meal-making-2.png",
    },
    {
      icon: Palette,
      title: "Art Studio",
      description: "Creative space for resident artistic expression and activities",
      className: "md:col-span-1",
      gradient: "from-purple-400/20 via-pink-400/20 to-rose-400/20",
      image: "/images/resident_barbershop.jpg",
    },
    {
      icon: Home,
      title: "Home-Like Design",
      description: "12-person households with warm, residential environments",
      className: "md:col-span-1",
      gradient: "from-emerald-400/20 via-teal-400/20 to-cyan-400/20",
      image: "/images/Chapel-1920-1024x576.jpg",
    },
    {
      icon: Users,
      title: "Community Spaces",
      description: "Shared areas designed for connection and engagement",
      className: "md:col-span-2",
      gradient: "from-blue-400/20 via-indigo-400/20 to-violet-400/20",
      image: "/images/Garden-Beds-1920.jpg",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-accent-100 border border-accent-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent-600" />
            <span className="text-accent-700 font-semibold text-sm">Opening 2027</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
              A NEW STANDARD
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            IN SENIOR CARE
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <BentoGridItem
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  className={feature.className}
                  icon={
                    <div className="p-3 rounded-xl bg-white shadow-lg inline-flex">
                      <Icon className="w-6 h-6 text-accent-600" />
                    </div>
                  }
                  header={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="relative w-full h-full min-h-[16rem] overflow-hidden rounded-xl group"
                    >
                      {/* Background Image */}
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay for readability */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`} />

                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                          <Icon className="relative w-12 h-12 text-primary" />
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  }
                />
              );
            })}
          </BentoGrid>
        </motion.div>

        {/* Home for Us Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl
                          bg-white/60 backdrop-blur-xl border-2 border-accent-200
                          shadow-xl shadow-accent-500/10">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-accent-600" />
              <h4 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Home for Us Model
              </h4>
            </div>
            <p className="text-gray-700 max-w-2xl">
              A revolutionary approach to senior living that prioritizes resident autonomy,
              relationship-centered care, and home-like environments over institutional settings
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
