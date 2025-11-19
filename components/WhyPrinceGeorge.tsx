"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, Home, Heart, GraduationCap, Snowflake, Bike, Users, TrendingUp, School, Building2, Waves } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

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
    <section id="prince-george" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              LIVE, WORK, THRIVE IN PRINCE GEORGE
            </span>
          </h2>
          <div className="h-1 w-64 bg-gradient-to-r from-primary via-accent to-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Outdoor Adventure Card - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-accent overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
              {/* Topographic background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 Q25,15 50,20 T100,20" stroke="currentColor" fill="none" className="text-primary" />
                  <path d="M0,40 Q25,35 50,40 T100,40" stroke="currentColor" fill="none" className="text-primary" />
                  <path d="M0,60 Q25,55 50,60 T100,60" stroke="currentColor" fill="none" className="text-primary" />
                </svg>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full">
                {/* Left: Large number */}
                <div className="flex flex-col justify-between">
                  <div>
                    <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                      Year-Round Activities
                    </Badge>
                    <div className="relative">
                      <div className="text-8xl font-bold text-primary">
                        365
                      </div>
                      <p className="text-xl font-semibold text-gray-600 mt-2">
                        Days of Adventure
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-4">
                    World-class skiing, hiking, and outdoor activities in every season
                  </p>
                </div>

                {/* Right: Activity icons grid */}
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[Snowflake, Mountain, Bike, Waves].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Housing Affordability Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-accent overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Home className="w-3 h-3 mr-1" />
                Housing Cost
              </Badge>

              {/* Large percentage */}
              <div className="text-7xl font-bold text-accent mb-2">
                37.6%
              </div>
              <p className="text-sm font-semibold text-gray-600 mb-6">vs 133% in Vancouver</p>

              {/* Comparison bars */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Prince George</span>
                    <span className="font-bold text-accent">37.6%</span>
                  </div>
                  <Progress value={37.6} className="h-3 bg-gray-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Vancouver</span>
                    <span className="font-bold text-gray-400">133%</span>
                  </div>
                  <Progress value={100} className="h-3 bg-gray-100 [&>div]:bg-gray-300" />
                </div>
              </div>

              <Separator className="my-4" />

              <p className="text-sm text-gray-600 leading-relaxed">
                Own a home and build your future in an affordable city
              </p>
            </div>
          </motion.div>

          {/* Family Friendly Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-accent overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                    <Heart className="w-3 h-3 mr-1 fill-current" />
                    Community
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Family Friendly
                  </h3>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>

              {/* Statistics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-xs text-gray-600">Schools</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-xs text-gray-600">Parks</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-xs text-gray-600">Events</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent mb-1">15K+</div>
                  <div className="text-xs text-gray-600">Families</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Growing community with young families and excellent amenities
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 w-fit">
                <GraduationCap className="w-3 h-3 mr-1" />
                Education Hub
              </Badge>

              {/* Split pathway visualization */}
              <div className="grid md:grid-cols-2 gap-6 flex-1 items-center">
                {/* UNBC */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
                      <School className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">UNBC</h4>
                      <p className="text-xs text-gray-600">University</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Bachelor Programs</Badge>
                    <Badge variant="outline" className="text-xs">Master Programs</Badge>
                    <Badge variant="outline" className="text-xs">Research</Badge>
                  </div>
                </div>

                {/* CNC */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">CNC</h4>
                      <p className="text-xs text-gray-600">College</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Diploma Programs</Badge>
                    <Badge variant="outline" className="text-xs">Certificates</Badge>
                    <Badge variant="outline" className="text-xs">Training</Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
