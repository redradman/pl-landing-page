"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users as UsersIcon, DollarSign } from "lucide-react";

export default function WhyWorkWithUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabsData = [
    {
      value: "growth",
      label: "Professional Growth",
      icon: TrendingUp,
      features: [
        "Strong training programs",
        "Career development pathways",
        "Education support and funding",
        "Mentorship opportunities",
        "Leadership development",
      ],
      testimonial: {
        quote: "The H4U model lets me focus on what matters: building relationships.",
        author: "Sarah, RN",
      },
    },
    {
      value: "culture",
      label: "Work Culture",
      icon: UsersIcon,
      features: [
        "Collaborative team environment",
        "Work-life balance",
        "Innovative care approach",
        "Supportive leadership",
        "Recognition programs",
      ],
      testimonial: {
        quote: "I've never felt more valued as a healthcare professional.",
        author: "Michael, LPN",
      },
    },
    {
      value: "compensation",
      label: "Compensation",
      icon: DollarSign,
      features: [
        "Competitive salaries",
        "Comprehensive benefits",
        "Pension plan",
        "Relocation assistance",
        "Signing bonuses",
      ],
      testimonial: {
        quote: "The benefits package made my decision to relocate easy.",
        author: "Jennifer, Care Aide",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-display-lg font-bold text-primary mb-2">
            MORE THAN A JOB—A CAREER WITH PURPOSE
          </h2>
          <div className="h-1 w-64 bg-accent mx-auto" />
        </motion.div>

        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 h-auto">
            {tabsData.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 py-3 data-[state=active]:border-b-4 data-[state=active]:border-accent"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left panel - Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6 bg-white p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {tab.label}
                  </h3>
                  <ul className="space-y-4">
                    {tab.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Right panel - Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-lg relative"
                >
                  <div className="absolute top-6 left-6 text-6xl text-accent opacity-20">
                    "
                  </div>
                  <div className="relative z-10 space-y-4">
                    <p className="text-xl italic text-gray-800 leading-relaxed">
                      {tab.testimonial.quote}
                    </p>
                    <p className="text-primary font-semibold">
                      — {tab.testimonial.author}
                    </p>
                  </div>
                  <div className="mt-6 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-md flex items-center justify-center">
                    <p className="text-gray-400">Video testimonial placeholder</p>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
