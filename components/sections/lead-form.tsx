'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
import { CheckCircle, Loader2 } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log('Newsletter signup (mockup):', formData);
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
      className="py-24 sm:py-32 bg-gray-50"
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D74] mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be among the first to know about career opportunities at our Prince George facility
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
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
                    className="h-12 border-gray-300 focus:border-[#002D74] focus:ring-[#002D74]"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
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
                    className="h-12 border-gray-300 focus:border-[#002D74] focus:ring-[#002D74]"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Interest Level */}
                <div>
                  <Label htmlFor="interest" className="text-sm font-medium text-gray-700 mb-2 block">
                    Current Interest in Healthcare *
                  </Label>
                  <Select
                    required
                    value={formData.interest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, interest: value })
                    }
                  >
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#002D74] focus:ring-[#002D74]">
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
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[120px] border-gray-300 focus:border-[#002D74] focus:ring-[#002D74]"
                    placeholder="Tell us what excites you about Home for Us..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#002D74] hover:bg-[#007DA5] text-white h-14 text-base font-medium rounded-full transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </motion.div>
              <h3 className="text-3xl font-semibold text-[#002D74] mb-3">
                Welcome to Our Community!
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                We've received your information and will be in touch soon.
              </p>
              <p className="text-sm text-gray-500">
                Form will reset automatically
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
