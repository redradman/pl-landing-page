"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function SignupForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    status: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupCount] = useState(523); // Demo count
  const [formProgress, setFormProgress] = useState(0);

  // Calculate form completion progress
  useEffect(() => {
    const fields = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.status,
    ];
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    setFormProgress((filledFields / fields.length) * 100);
  }, [formData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.status) {
      newErrors.status = "Please select your current status";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Show success toast
        toast({
          title: "Welcome aboard! 🎉",
          description: `You're signup #${signupCount + 1}. Check your email for next steps.`,
        });

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            status: "",
          });
        }, 5000);
      }, 1500);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="signup" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02]" />
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary mb-4">
              BE FIRST TO KNOW ABOUT OPPORTUNITIES
            </h2>
            <div className="h-1 w-64 bg-accent mx-auto mb-6" />
            <p className="text-xl text-gray-700">
              Join {signupCount}+ people already signed up for updates
            </p>

            {/* Progress indicator */}
            {!isSubmitted && (
              <div className="max-w-md mx-auto mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Form completion</span>
                  <span className="font-semibold">{Math.round(formProgress)}%</span>
                </div>
                <Progress value={formProgress} className="h-2" />
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-10 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.firstName}
                        </motion.p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`transition-all duration-300 focus:border-accent focus:ring-accent ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`transition-all duration-300 focus:border-accent focus:ring-accent ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Status Dropdown */}
                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-gray-700 font-semibold">
                      I am... *
                    </Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => handleInputChange("status", value)}
                    >
                      <SelectTrigger
                        className={`transition-all duration-300 focus:border-accent focus:ring-accent ${
                          errors.status ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">
                          A student interested in healthcare
                        </SelectItem>
                        <SelectItem value="healthcare-worker">
                          A current healthcare worker
                        </SelectItem>
                        <SelectItem value="career-changer">
                          Interested in changing careers to healthcare
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.status && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.status}
                      </motion.p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      required
                      className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      I agree to receive updates from Providence Living about career
                      opportunities
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-5 text-lg transition-all duration-300 hover:shadow-lg shadow-primary/20 h-auto"
                    disabled={isSubmitting || formProgress < 100}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Sign Up for Updates'
                    )}
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-accent mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Successfully Submitted!
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    Thank you for your interest in Providence Living.
                  </p>
                  <p className="text-gray-600">
                    We'll keep you updated on opportunities in Prince George.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
}
