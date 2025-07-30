'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Bot, BarChart, Cpu, LayoutDashboard, Database, Zap,  Globe, Lock,  Users,  ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Features() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })


  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Content Generation",
      description: "Automatically create high-quality marketing copy, blogs, and social posts with our advanced AI models.",
      highlight: true,
      animationDelay: 0.1
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Track campaign performance with beautiful dashboards and actionable insights.",
      highlight: false,
      animationDelay: 0.2
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Forecast customer behavior and campaign outcomes with 95% accuracy.",
      highlight: true,
      animationDelay: 0.3
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Unified Dashboard",
      description: "Manage all your marketing channels from one intuitive control panel.",
      highlight: false,
      animationDelay: 0.4
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integration",
      description: "Connect all your data sources with our 100+ native integrations.",
      highlight: true,
      animationDelay: 0.5
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Automation",
      description: "Set up complex workflows with our no-code automation builder.",
      highlight: false,
      animationDelay: 0.6
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-channel",
      description: "Publish and track across all platforms simultaneously.",
      highlight: false,
      animationDelay: 0.7
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption.",
      highlight: true,
      animationDelay: 0.8
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for your entire marketing team.",
      highlight: false,
      animationDelay: 0.9
    }
  ]

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
      {/* Enhanced decorative elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 70%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 70%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
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
              Powerful Features
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
                transition: { delay: 0.3, duration: 0.6 }
              }
            }}
          >
            Everything you need to transform your marketing with AI-powered precision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: feature.animationDelay,
                    duration: 0.6, 
                    ease: [0.16, 0.77, 0.47, 0.97] 
                  }
                }
              }}
              whileHover={{ y: -5 }}
            >
              <Card className={cn(
                "h-full bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl backdrop-blur-sm transition-all",
                "relative overflow-hidden group hover:shadow-lg",
                feature.highlight ? "shadow-md" : "shadow-sm"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-lg mt-1",
                      feature.highlight 
                        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300" 
                        : "bg-muted/50 text-foreground dark:bg-muted/30 dark:text-foreground/80"
                    )}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-left text-lg">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-left text-muted-foreground dark:text-muted-foreground/80">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-4 -ml-2 text-primary hover:text-primary/80 dark:text-primary-300 dark:hover:text-primary-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.0, duration: 0.6 }
          }
        }}
      >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="relative"
      >
        <Button 
          size="lg" 
          className="px-10 py-7 text-lg font-semibold transition-all duration-300 relative overflow-hidden bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Features
          </span>
        </Button>
      </motion.div>
      </motion.div>
      </div>
    </motion.section>
  )
}