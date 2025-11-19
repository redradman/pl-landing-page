"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Mountain, Home, Heart, GraduationCap } from "lucide-react";

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
    <section id="prince-george" className="py-20 bg-accent-light relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-display-lg font-bold text-primary mb-2">
            LIVE, WORK, THRIVE IN PRINCE GEORGE
          </h2>
          <div className="h-1 w-64 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var w-full">
                  <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-gray-200 w-full h-auto rounded-xl p-6 border hover:shadow-xl transition-shadow">
                    <CardItem
                      translateZ="50"
                      className="w-full flex flex-col items-center text-center space-y-4"
                    >
                      <CardItem
                        translateZ="100"
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-md"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </CardItem>

                      <div className="space-y-2">
                        <CardItem
                          translateZ="60"
                          as="h3"
                          className="text-xl font-bold text-gray-900"
                        >
                          {benefit.title}
                        </CardItem>
                        <CardItem
                          translateZ="40"
                          as="p"
                          className="text-lg font-semibold text-accent"
                        >
                          {benefit.description}
                        </CardItem>
                        <CardItem
                          translateZ="30"
                          as="p"
                          className="text-sm text-gray-600"
                        >
                          {benefit.detail}
                        </CardItem>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>

        {/* Panoramic Image Carousel Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-r from-primary via-accent to-primary-light shadow-xl"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-2">
              <p className="text-2xl font-bold">Discover Prince George</p>
              <p className="text-lg">Beautiful landscapes and vibrant community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
