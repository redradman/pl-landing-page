'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function LeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log('Form submission (mockup):', formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        interest: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section
      id="lead-form"
      ref={ref}
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#002D74] mb-4">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Be among the first to know about career opportunities at our Prince George facility
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-gray-100">
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Label
                    htmlFor="fullName"
                    className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'fullName' ? 'text-[#007DA5]' : 'text-gray-700'
                    }`}
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className="mt-2 border-2 focus:border-[#007DA5] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label
                    htmlFor="email"
                    className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-[#007DA5]' : 'text-gray-700'
                    }`}
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="mt-2 border-2 focus:border-[#007DA5] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Interest Level */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Label
                    htmlFor="interest"
                    className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'interest' ? 'text-[#007DA5]' : 'text-gray-700'
                    }`}
                  >
                    Current Interest in Healthcare *
                  </Label>
                  <Select
                    required
                    value={formData.interest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, interest: value })
                    }
                  >
                    <SelectTrigger
                      className="mt-2 border-2 focus:border-[#007DA5] transition-all duration-300"
                      onFocus={() => setFocusedField('interest')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <SelectValue placeholder="Select your current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current-worker">
                        Current Healthcare Worker
                      </SelectItem>
                      <SelectItem value="post-secondary">
                        Post-Secondary Student
                      </SelectItem>
                      <SelectItem value="high-school">
                        High School Student
                      </SelectItem>
                      <SelectItem value="career-change">
                        Career Change to Healthcare
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Label
                    htmlFor="message"
                    className={`text-sm font-medium transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-[#007DA5]' : 'text-gray-700'
                    }`}
                  >
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="mt-2 border-2 focus:border-[#007DA5] transition-all duration-300 min-h-[120px]"
                    placeholder="Tell us what excites you about Home for Us..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#002D74] to-[#007DA5] hover:from-[#007DA5] hover:to-[#002D74] text-white py-6 text-lg font-semibold transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Join Our Community'
                    )}
                  </Button>
                </motion.div>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#002D74] mb-2">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600">
                  We've received your information and will be in touch soon.
                </p>
                <motion.div
                  className="mt-4 inline-flex items-center space-x-2 text-sm text-gray-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>Form will reset automatically</span>
                </motion.div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
