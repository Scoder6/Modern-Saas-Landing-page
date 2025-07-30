'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Check, Zap, Star, Rocket, BadgeCheck, Shield, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

export function Pricing() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [annualBilling, setAnnualBilling] = useState(true)
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)
  const [aiWords, setAiWords] = useState(50000)
  const [userSeats, setUserSeats] = useState(5)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Calculate custom pricing based on inputs
  const calculateCustomPrice = () => {
    const basePrice = 99 // Professional tier base price
    const wordMultiplier = Math.max(0, (aiWords - 50000) / 10000 * 5);
    const seatMultiplier = Math.max(0, (userSeats - 10) * 10);
    return basePrice + wordMultiplier + seatMultiplier;
  }

  const pricingTiers = [
    {
      name: "Starter",
      price: annualBilling ? "$29" : "$35",
      billing: annualBilling ? "per month, billed yearly" : "per month",
      description: "Perfect for small teams getting started with AI marketing.",
      features: [
        "10,000 AI words/month",
        "Basic analytics dashboard",
        "3 user seats included",
        "Email support (48h response)",
        "5 automation workflows",
        "Standard templates"
      ],
      cta: "Get Started",
      popular: false,
      featured: false,
      annualSavings: "$72"
    },
    {
      name: "Professional",
      price: annualBilling ? "$99" : "$119",
      billing: annualBilling ? "per month, billed yearly" : "per month",
      description: "For growing businesses scaling marketing operations.",
      features: [
        "50,000 AI words/month",
        "Advanced analytics + reports",
        "10 user seats included",
        "Priority support (24h response)",
        "Unlimited workflows",
        "API access",
        "Custom templates",
        "A/B testing tools"
      ],
      cta: "Start Free Trial",
      popular: true,
      featured: false,
      annualSavings: "$240"
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "Tailored to your needs",
      description: "For organizations with complex requirements.",
      features: [
        "Unlimited AI words",
        "Premium analytics + predictions",
        "Unlimited seats",
        "24/7 dedicated support",
        "Advanced automation",
        "SSO & SAML",
        "Custom AI models",
        "Dedicated account manager",
        "On-premise options"
      ],
      cta: "Contact Sales",
      popular: false,
      featured: true
    }
  ]

  // Calculate recommended tier based on usage
  const recommendedTier = aiWords > 100000 || userSeats > 15 ? "Enterprise" : 
                         aiWords > 20000 || userSeats > 5 ? "Professional" : "Starter"

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
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.15, 0.1]
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
              Pricing That Scales With You
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
            Choose the perfect plan for your business needs. Cancel anytime.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mt-8"
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
            <Label htmlFor="billing-toggle" className="text-lg font-medium">Annual</Label>
            <Switch 
              id="billing-toggle" 
              checked={!annualBilling} 
              onCheckedChange={(val) => setAnnualBilling(!val)}
              className="data-[state=checked]:bg-primary"
            />
            <Label htmlFor="billing-toggle" className="text-lg font-medium">Monthly</Label>
            {annualBilling && (
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-500/10 text-green-500 dark:text-green-400 flex items-center">
                <Star className="h-3 w-3 mr-1 fill-green-500 dark:fill-green-400" /> Save up to 20%
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Calculator */}
        <motion.div
          className="bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl p-8 mb-16 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.6 }
            }
          }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BadgeCheck className="h-6 w-6 text-primary" />
            <span>Custom Pricing Calculator</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-base font-medium">AI Words Per Month</Label>
                  <span className="text-primary font-medium">{aiWords.toLocaleString()}</span>
                </div>
                <Slider 
                  value={[aiWords]} 
                  onValueChange={(val) => setAiWords(val[0])}
                  min={10000} 
                  max={500000} 
                  step={5000}
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>10K</span>
                  <span>500K+</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-base font-medium">User Seats</Label>
                  <span className="text-primary font-medium">{userSeats}</span>
                </div>
                <Slider 
                  value={[userSeats]} 
                  onValueChange={(val) => setUserSeats(val[0])}
                  min={1} 
                  max={50} 
                  step={1}
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 dark:bg-muted/20 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-2">Recommended Plan</h4>
                <div className="flex items-center gap-2 mb-4">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    recommendedTier === "Enterprise" ? "bg-purple-600/10 text-purple-600 dark:text-purple-400" :
                    recommendedTier === "Professional" ? "bg-primary/10 text-primary dark:text-primary-300" :
                    "bg-green-500/10 text-green-500 dark:text-green-400"
                  )}>
                    {recommendedTier}
                  </div>
                  {recommendedTier !== "Enterprise" && annualBilling && (
                    <div className="text-sm text-muted-foreground">
                      Save ${recommendedTier === "Professional" ? "240" : "72"} annually
                    </div>
                  )}
                </div>
                
                {recommendedTier === "Enterprise" ? (
                  <p className="text-muted-foreground">
                    Your usage requires custom enterprise pricing with unlimited scaling options.
                  </p>
                ) : (
                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-bold">
                        {recommendedTier === "Professional" ? 
                          (annualBilling ? "$99" : "$119") : 
                          (annualBilling ? "$29" : "$35")}
                      </span>
                      <span className="text-muted-foreground">
                        {annualBilling ? "per month, billed yearly" : "per month"}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Includes {recommendedTier === "Professional" ? "50,000" : "10,000"} AI words and {recommendedTier === "Professional" ? "10" : "3"} users
                    </p>
                  </div>
                )}
              </div>
              
              <Button 
                size="lg" 
                className={cn(
                  "w-full mt-6",
                  recommendedTier === "Enterprise" ? "bg-purple-600 hover:bg-purple-700" :
                  recommendedTier === "Professional" ? "bg-primary hover:bg-primary/90" :
                  "bg-green-600 hover:bg-green-700"
                )}
              >
                {recommendedTier === "Enterprise" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: 0.5 + (i * 0.1),
                    duration: 0.6, 
                    ease: [0.16, 0.77, 0.47, 0.97] 
                  }
                }
              }}
              onMouseEnter={() => setHoveredTier(tier.name)}
              onMouseLeave={() => setHoveredTier(null)}
              className="relative"
            >
              {/* Recommended badge */}
              {recommendedTier === tier.name && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center z-20">
                  <Star className="h-3 w-3 mr-1 fill-white" /> Recommended
                </div>
              )}
              
              <Card className={cn(
                "h-full border-2 transition-all group",
                "relative overflow-hidden",
                tier.popular ? "border-primary/30 dark:border-primary/50" : 
                tier.featured ? "border-purple-600/30 dark:border-purple-600/50" : 
                "border-border/20 dark:border-border/30",
                hoveredTier === tier.name ? "shadow-xl scale-[1.02]" : "shadow-lg",
                recommendedTier === tier.name ? "ring-2 ring-green-500/30" : ""
              )}>
                {/* Popular/Featured badge */}
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white dark:text-black px-3 py-1 rounded-full text-xs font-medium flex items-center z-10">
                    <Zap className="h-3 w-3 mr-1 fill-white dark:fill-black" /> Most Popular
                  </div>
                )}
                {tier.featured && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center z-10">
                    <Rocket className="h-3 w-3 mr-1 fill-white" /> Premium
                  </div>
                )}
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card content */}
                <CardHeader className={cn(
                  "pt-12 pb-6 border-b border-border/20 dark:border-border/30",
                  tier.popular ? "bg-primary/5 dark:bg-primary/10" : "",
                  tier.featured ? "bg-purple-600/5 dark:bg-purple-600/10" : ""
                )}>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    {tier.name}
                    {tier.featured && <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                  </CardTitle>
                  
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-4xl font-bold">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm mb-1">
                        {tier.billing}
                      </span>
                    )}
                  </div>
                  
                  {tier.annualSavings && annualBilling && (
                    <div className="text-sm text-green-500 dark:text-green-400 mt-1">
                      Save {tier.annualSavings} annually
                    </div>
                  )}
                  
                  <CardDescription className="text-base mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="py-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90 dark:text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
<CardFooter>
  <Button 
    size="lg" 
    className={cn(
      "w-full font-semibold transition-all",
      tier.popular 
        ? "bg-primary hover:bg-primary/90 dark:bg-primary-600 dark:hover:bg-primary-500" 
        : tier.featured
          ? "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
          : "bg-background border border-border/20 hover:border-primary/40 hover:text-primary dark:hover:text-primary-300 text-foreground dark:text-foreground",
      recommendedTier === tier.name ? "ring-2 ring-offset-2 ring-green-500/50" : ""
    )}
  >
    {tier.cta}
  </Button>
</CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
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
          <div className="bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl p-8 max-w-3xl mx-auto shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">Need custom enterprise solutions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team will create a tailored package with premium support, custom AI models, and dedicated infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-10 py-6 text-lg font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
              >
                Request Enterprise Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-6 text-lg font-semibold border-2"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}