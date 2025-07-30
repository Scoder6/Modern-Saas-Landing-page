'use client'

import { Button } from '@/components/ui/button'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Cpu, Zap, BarChart, LayoutDashboard, Bot, Database } from 'lucide-react'

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    setIsMounted(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const features = [
    { icon: <Bot className="h-8 w-8" />, name: 'AI Content Generation' },
    { icon: <BarChart className="h-8 w-8" />, name: 'Analytics Dashboard' },
    { icon: <Cpu className="h-8 w-8" />, name: 'Predictive Analytics' },
    { icon: <LayoutDashboard className="h-8 w-8" />, name: 'Campaign Manager' },
    { icon: <Database className="h-8 w-8" />, name: 'Data Integration' },
    { icon: <Zap className="h-8 w-8" />, name: 'Automation Workflows' }
  ]

  // SSR-safe random values
  const particleConfigs = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: (i % 3 + 1) * 3,
    left: (i * 83) % 95 + 2.5,
    top: (i * 47) % 90 + 5,
    duration: 10 + (i % 5) * 3,
    yOffset: i % 2 === 0 ? -40 : 40,
    xOffset: i % 3 === 0 ? -20 : 20
  }))

  return (
    <motion.section 
      ref={ref}
      className="relative py-32 lg:py-48 xl:py-64 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 0.8 }
        }
      }}
    >
      {/* Animated background elements with glassmorphism effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-500/5 backdrop-blur-lg"
          animate={isMounted ? {
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          } : {}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'rgba(99, 102, 241, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-rose-500/5 backdrop-blur-lg"
          animate={isMounted ? {
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'rgba(244, 63, 94, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main headline - Updated for ADmyBRAND */}
          <motion.div
            className="mb-16"
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-indigo-500 to-rose-500">
                Transform Your Marketing
              </span>
              <br />
              <span className="text-indigo-500">With AI Power</span>
            </h1>
            <motion.div
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-indigo-500/80 to-transparent opacity-50 mx-auto max-w-xl"
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scaleX: 1,
                  transition: { delay: 0.4, duration: 1.2 }
                }
              }}
            />
          </motion.div>

          {/* Features grid - Updated for marketing focus */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 bg-background/80 border border-border/20 rounded-xl backdrop-blur-sm hover:border-indigo-500/40 transition-all group overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: [0.16, 0.77, 0.47, 0.97] 
                    }
                  }
                }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    animate={isMounted ? {
                      y: [0, -15, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    } : {}}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{feature.name}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA section - Updated for marketing tool */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.6 }
              }
            }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              ADmyBRAND AI Suite delivers <span className="text-indigo-500 font-medium">data-driven marketing solutions</span> that increase conversions and ROI through intelligent automation and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <Button 
                  size="lg" 
                  className={`px-10 py-7 text-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                    isHovered 
                      ? 'bg-gradient-to-r from-indigo-500 to-rose-500 text-white' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
                  </span>
                  <span className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered 
                      ? 'bg-gradient-to-r from-indigo-600/80 to-rose-600/80 opacity-0 group-hover:opacity-100' 
                      : 'bg-indigo-700/5 opacity-0 group-hover:opacity-100'
                  }`} />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-10 py-7 text-lg font-semibold border-2 border-indigo-500/20 hover:border-indigo-500/40 text-indigo-500 hover:text-indigo-600 bg-transparent"
                >
                  See Live Demo
                </Button>
              </motion.div>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating particles with updated color scheme */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particleConfigs.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`
              }}
              animate={{
                y: [0, particle.yOffset, 0],
                x: [0, particle.xOffset, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      )}
    </motion.section>
  )
}