"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StatsBar() {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`bg-white z-40 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-lg"
          : "relative"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Opening 2027</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm font-semibold text-gray-900">100+ Positions</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isSticky ? (
              <Button
                onClick={scrollToSignup}
                className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Sign Up for Updates
              </Button>
            ) : (
              <>
                <Bell className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sign Up for Updates</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
