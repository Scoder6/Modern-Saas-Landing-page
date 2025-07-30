'use client'

import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Clock, MessageSquare, User, Calendar, Tag, Play, Pause } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function BlogResources() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

// Auto-play when in view
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => {
            // Fallback if autoplay is blocked
            setIsPlaying(false);
          });
          setIsPlaying(true);
          controls.start("visible");
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (videoRef.current) {
    observer.observe(videoRef.current);
  }

  return () => {
    if (videoRef.current) {
      observer.unobserve(videoRef.current);
    }
  };
}, [controls]);

// Manual play/pause toggle
const toggleVideoPlayback = async () => {
  if (videoRef.current) {
    if (isPlaying) {
      await videoRef.current.pause();
    } else {
      await videoRef.current.play().catch(e => {
        // Handle browsers that block autoplay
        setIsPlaying(false);
        return;
      });
    }
    setIsPlaying(!isPlaying);
  }
};

  const resources = [
    {
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how AI is revolutionizing customer engagement and marketing strategies in 2025.",
      category: "AI Trends",
      date: "May 15, 2025",
      readTime: "8 min read",
      comments: 12,
      author: "Sarah Chen",
      featured: true,
videoUrl: "https://cdn.pixabay.com/vimeo/627145886/Business-Team-Meeting-Recording-0-10sec.mp4"



    },
    {
      title: "10 Ways to Boost Your Conversion Rates",
      excerpt: "Proven strategies to increase your website conversions using behavioral psychology.",
      category: "Growth",
      date: "April 28, 2025",
      readTime: "6 min read",
      comments: 8,
      author: "Michael Rodriguez"
    },
    {
      title: "Mastering Marketing Automation",
      excerpt: "How to set up efficient workflows that save time and increase revenue.",
      category: "Automation",
      date: "April 10, 2025",
      readTime: "10 min read",
      comments: 15,
      author: "Emma Johnson"
    },
    {
      title: "The Complete Guide to Customer Segmentation",
      excerpt: "Learn how to divide your audience for hyper-targeted campaigns.",
      category: "Strategy",
      date: "March 22, 2025",
      readTime: "12 min read",
      comments: 5,
      author: "David Park"
    }
  ]

  return (
    <motion.section 
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 0.8 }
        }
      }}
    >
      {/* Advanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 25,
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
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0) 70%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.6 }
              }
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-purple-600 dark:from-white dark:via-primary-300 dark:to-purple-400">
              Resources & Insights
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.6 }
              }
            }}
          >
            Discover the latest trends, strategies, and best practices in AI-powered marketing.
          </motion.p>
        </motion.div>

        {/* Featured Post with Video */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.6 }
            }
          }}
        >
          <Card className="group relative overflow-hidden border-2 border-primary/30 dark:border-primary/50 shadow-2xl">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                <Badge className="mb-4 w-fit bg-primary/10 text-primary dark:text-primary-300">
                  Featured Post
                </Badge>
                <CardTitle className="text-3xl lg:text-4xl font-bold mb-4">
                  {resources[0].title}
                </CardTitle>
                <CardDescription className="text-lg mb-6">
                  {resources[0].excerpt}
                </CardDescription>
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{resources[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{resources[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{resources[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>{resources[0].comments} comments</span>
                  </div>
                </div>
                <Button size="lg" className="w-fit group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative h-full min-h-[400px]">
                {/* Video overlay controls */}
                <button 
                  onClick={toggleVideoPlayback}
                  className="absolute z-20 top-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 hover:bg-background transition-all"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-foreground" />
                  ) : (
                    <Play className="h-5 w-5 text-foreground" />
                  )}
                </button>
                
                {/* Video element */}
<video
  ref={videoRef}
  className="absolute inset-0 w-full h-full object-cover"
  loop
  muted
  playsInline
  disablePictureInPicture
  preload="auto"
  poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
>
  <source src = "https://cdn.pixabay.com/vimeo/627145886/Business-Team-Meeting-Recording-0-10sec.mp4" type="video/mp4" />
</video>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent z-10 md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-10 md:bg-gradient-to-r md:via-background/0" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
        >
          {resources.slice(1).map((resource, index) => (
            <motion.div
              key={index}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.16, 0.77, 0.47, 0.97] 
                  }
                },
                hidden: { 
                  opacity: 0, 
                  y: 30 
                }
              }}
            >
              <Card className="group h-full flex flex-col border-2 border-border/20 dark:border-border/30 hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="absolute -top-4 -right-4">
                    <Badge className="bg-muted text-foreground hover:bg-muted/80 shadow-sm">
                      {resource.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl font-bold group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {resource.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{resource.date}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary/40 group-hover:text-primary transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }
          }}
        >
          <div className="relative bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-sm overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Want more marketing insights?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly articles, case studies, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-lg border border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none bg-background/50 dark:bg-background/80 transition-all"
                />
                <Button 
                  size="lg" 
                  className="px-6 py-3 font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}