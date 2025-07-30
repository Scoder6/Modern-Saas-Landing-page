'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite revolutionized our marketing strategy. We saw a 300% increase in engagement within the first month. The AI insights are incredibly accurate and actionable.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Digital Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "The automation capabilities saved us 40 hours per week. Our team can now focus on creative strategy while the AI handles the repetitive tasks perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Brand Manager",
    company: "Creative Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "Incredible ROI! Our ad spend efficiency improved by 250%. The predictive analytics helped us identify high-value customers we never knew existed.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "Growth Hacker",
    company: "StartupBoost",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "Game-changing tool for startups. The AI-driven content creation is spot-on, and the customer segmentation features are incredibly sophisticated yet easy to use.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section 
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 0.8 }
        }
      }}
    >
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 70%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 0.77, 0.47, 0.97] 
              }
            }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-purple-600 dark:from-white dark:via-primary-300 dark:to-purple-400">
              Trusted by Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto">
            Join thousands of marketing professionals who've transformed their campaigns with our AI-powered suite
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <motion.div 
            className="relative bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { 
                  delay: 0.2,
                  duration: 0.6, 
                  ease: [0.16, 0.77, 0.47, 0.97] 
                }
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl" />
            
            <div className="relative z-10">
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/30 dark:text-primary/40 mb-4" />
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-center text-foreground dark:text-foreground/90 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-30" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-foreground dark:text-foreground/90">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground dark:text-muted-foreground/80">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background/90 backdrop-blur-sm border-border/20 dark:border-border/30 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background/90 backdrop-blur-sm border-border/20 dark:border-border/30 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.6 }
            }
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-border/50 hover:bg-border/70'
              }`}
            />
          ))}
        </motion.div>

        {/* Bottom Testimonial Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                delay: 0.4,
                staggerChildren: 0.1,
                when: "beforeChildren"
              }
            }
          }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm"
              onClick={() => goToSlide(index)}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.16, 0.77, 0.47, 0.97] 
                  }
                }
              }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground dark:text-foreground/90">{testimonial.name}</h5>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 line-clamp-3 mb-3">
                {testimonial.content}
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border/20 dark:border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.6 }
            }
          }}
        >
          <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <span>5,000+ Marketing Teams</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <span>92% Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <span>4.9/5 Average Rating</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}