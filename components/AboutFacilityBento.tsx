"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Palette, Home, Users, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BentoItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  icon: React.ElementType;
  className?: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "bistro",
    title: "Bistro Dining",
    description: "Community gathering space with cafe-style dining experiences",
    image: "/images/Meal-making-2.png",
    features: [
      "Restaurant-style dining",
      "Chef-prepared meals",
      "Social gathering space",
      "Flexible meal times",
    ],
    icon: Coffee,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "art",
    title: "Engaging Activities",
    description: "Meaningful activities and creative programs for all residents",
    image: "/images/Wormell-Judy-beans-1200-px.jpg",
    features: [
      "Art & crafts",
      "Gardening programs",
      "Music therapy",
      "Social events",
    ],
    icon: Palette,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "homelike",
    title: "Home-Like Design",
    description: "Small 12-person households with warm, residential environments",
    image: "/images/Chapel-1920-1024x576.jpg",
    features: [
      "Private rooms",
      "Shared living areas",
      "Home-style kitchens",
      "Quiet spaces",
    ],
    icon: Home,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "community",
    title: "Beautiful Grounds",
    description: "Expansive courtyard and landscaped outdoor spaces",
    image: "/images/Courtyard-Birdseye-View-prince_george.jpg",
    features: [
      "Courtyard views",
      "Walking paths",
      "Garden areas",
      "Outdoor seating",
    ],
    icon: Users,
    className: "md:col-span-2 md:row-span-1",
  },
];

// Removed Framer Motion variants to prevent animation conflicts

const FeaturesSpotlight = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={`feature-${index}`}
          className="flex items-center gap-2"
        >
          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
          <span className="text-sm text-gray-700">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

const BentoCard = ({ item, index }: { item: BentoItem; index?: number }) => {
  const Icon = item.icon;
  const isFirstTwo = index !== undefined && index < 2;

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-3xl overflow-hidden",
        "bg-gradient-to-br from-white to-gray-50",
        "border-2 border-gray-100",
        "hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10",
        "transition-all duration-500 opacity-0 animate-fade-in-up",
        "hover:scale-[1.02]",
        item.className
      )}
      style={{
        animationDelay: `${(index || 0) * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Image Section with Overlay Content */}
      {item.image && (
        <div className="relative h-72 md:h-80 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={isFirstTwo ? "eager" : "lazy"}
            priority={isFirstTwo}
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon badge with accent */}
          <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white shadow-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Title overlaid on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Featured
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-2xl transform group-hover:translate-x-2 transition-transform duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      )}

      {/* Content Section - Redesigned */}
      <div className="flex-1 p-8 flex flex-col bg-white">
        <p className="text-base text-gray-600 mb-6 leading-relaxed font-medium">
          {item.description}
        </p>

        {item.features && (
          <div className="mt-auto">
            <div className="h-px bg-gradient-to-r from-accent via-primary to-transparent mb-5 opacity-30" />
            <ul className="grid grid-cols-1 gap-3">
              {item.features.map((feature, idx) => (
                <li
                  key={`feature-${idx}`}
                  className="flex items-center gap-3 group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Accent border that appears on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default function AboutFacilityBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      <div ref={ref} className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 border border-accent-200 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent-700 font-semibold text-sm">Opening 2027</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-400 to-accent bg-clip-text text-transparent">
              A NEW STANDARD
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            IN SENIOR CARE
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {/* First Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <BentoCard item={bentoItems[0]} index={0} />
              </div>
              <div className="md:col-span-1">
                <BentoCard item={bentoItems[1]} index={1} />
              </div>
            </div>
            {/* Second Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <BentoCard item={bentoItems[2]} index={2} />
              </div>
              <div className="md:col-span-2">
                <BentoCard item={bentoItems[3]} index={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Home for Us Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl
                          bg-white/60 backdrop-blur-xl border-2 border-accent-200
                          shadow-xl shadow-accent/10">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-accent" />
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
