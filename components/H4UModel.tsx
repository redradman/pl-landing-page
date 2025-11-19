"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Home, User, Heart, Building, Users } from "lucide-react";
import Image from "next/image";

export default function H4UModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Home,
      title: "Home is a Feeling",
      subtitle: "Not an institution",
      description: "Creating environments where residents feel truly at home, not in a facility",
    },
    {
      icon: User,
      title: "Resident Direct Moments",
      subtitle: "Person-centered approach",
      description: "Residents lead their daily routines and make choices that matter to them",
    },
    {
      icon: Heart,
      title: "Emotional Connection Matters",
      subtitle: "Building meaningful bonds",
      description: "Fostering deep relationships between staff, residents, and families",
    },
    {
      icon: Building,
      title: "Human-Centered Design",
      subtitle: "Dementia-informed spaces",
      description: "Thoughtfully designed spaces that support dignity and independence",
    },
    {
      icon: Users,
      title: "Relation-Centered Care",
      subtitle: "Collaborative households",
      description: "Small households working together as families, not as institutions",
    },
  ];

  return (
    <section id="h4u" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary mb-4">
            WHAT MAKES HOME FOR US DIFFERENT?
          </h2>
          <div className="h-1 w-64 bg-accent mx-auto mb-6" />
          <p className="text-lg text-gray-600 hidden md:block">Swipe to explore →</p>
        </motion.div>

        {/* Desktop: All cards visible */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {principle.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-3">
                        {principle.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Horizontal scroll */}
        <div className="lg:hidden relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <Card className="p-6 h-full bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-sm font-semibold text-accent mb-3">
                          {principle.subtitle}
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Progress dots for mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {principles.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center text-primary mb-12">
            Traditional Care vs Home for Us Model
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Care */}
            <Card className="p-8 bg-gray-50">
              <h4 className="text-xl font-bold text-gray-600 mb-6 text-center">
                Traditional Care
              </h4>
              <ul className="space-y-3">
                {[
                  "75+ residents",
                  "Hospital-like environment",
                  "Institutional schedule",
                  "Limited autonomy",
                  "Task-focused care",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-48 relative rounded-lg overflow-hidden">
                <div className="h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Traditional Care Setting
                </div>
              </div>
            </Card>

            {/* Home for Us */}
            <Card className="p-8 bg-accent-50 border-2 border-accent">
              <h4 className="text-xl font-bold text-primary mb-6 text-center">
                Home for Us Model
              </h4>
              <ul className="space-y-3">
                {[
                  "12-person homes",
                  "Home-like living spaces",
                  "Resident-directed routines",
                  "Full autonomy",
                  "Relationship-focused care",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-800">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/DementiaVillage3.png"
                  alt="Home for Us model - dementia village concept"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
