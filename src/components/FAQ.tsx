'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, HelpCircle, Zap, Database, CreditCard, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'features';
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'general',
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that helps businesses automate their marketing campaigns, analyze customer data, create personalized content, and optimize ad performance across multiple channels.'
  },
  {
    id: 2,
    category: 'features',
    question: 'How does the AI content generation work?',
    answer: 'Our advanced AI analyzes your brand voice, target audience, and campaign objectives to generate compelling copy, social media posts, email campaigns, and ad creatives. The AI learns from your feedback and continuously improves to match your brand perfectly.'
  },
  {
    id: 3,
    category: 'technical',
    question: 'What integrations are supported?',
    answer: 'We integrate with 100+ platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, Shopify, WooCommerce, Mailchimp, HubSpot, Salesforce, and many more. Our API also allows custom integrations.'
  },
  {
    id: 4,
    category: 'pricing',
    question: 'Can I change my plan anytime?',
    answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. No long-term contracts required.'
  },
  {
    id: 5,
    category: 'general',
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade security with AES-256 encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and is stored in secure, geographically distributed data centers.'
  },
  {
    id: 6,
    category: 'features',
    question: 'How accurate are the AI predictions?',
    answer: 'Our AI models achieve 92% accuracy in customer behavior prediction and 87% in campaign performance forecasting. The accuracy improves over time as the AI learns from your specific data patterns and campaign results.'
  },
  {
    id: 7,
    category: 'technical',
    question: 'Do you offer API access?',
    answer: 'Yes, we provide comprehensive REST APIs and webhooks for all Pro and Enterprise plans. Our API documentation includes SDKs for popular programming languages and detailed integration guides.'
  },
  {
    id: 8,
    category: 'pricing',
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test all capabilities and see real results before making any commitment.'
  }
];

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'General', icon: HelpCircle },
  { id: 'features', label: 'Features', icon: Zap },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'technical', label: 'Technical', icon: Database }
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
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
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto">
            Get instant answers to common questions about ADmyBRAND AI Suite
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                delay: 0.2,
                duration: 0.6 
              }
            }
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary hover:bg-primary/90 shadow-md'
                    : 'bg-background/80 dark:bg-background/90 backdrop-blur-sm border-border/20 dark:border-border/30 hover:bg-primary/10 hover:border-primary/40'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: { 
                  delay: 0.3,
                  staggerChildren: 0.1,
                  when: "beforeChildren"
                }
              }
            }}
          >
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
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
              >
                <div 
                  className={`
                    bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-xl overflow-hidden 
                    hover:shadow-lg transition-all duration-300 backdrop-blur-sm
                    ${openItems.has(faq.id) ? 'shadow-md' : ''}
                  `}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground dark:text-foreground/90 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                        openItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openItems.has(faq.id) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 border-t border-border/20 dark:border-border/30">
                      <p className="text-muted-foreground dark:text-muted-foreground/80 pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                delay: 0.4,
                duration: 0.6 
              }
            }
          }}
        >
          <div className="bg-background/80 dark:bg-background/90 border border-border/20 dark:border-border/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground/90">
              Still have questions?
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/80 mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 shadow-md"
              >
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                className="bg-background/80 dark:bg-background/90 backdrop-blur-sm border-border/20 dark:border-border/30 hover:bg-primary/10 hover:border-primary/40"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border/20 dark:border-border/30">
            <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
              <Shield className="h-5 w-5 text-primary" />
              <span>Enterprise-grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
              <Zap className="h-5 w-5 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground/80">
              <Database className="h-5 w-5 text-primary" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}