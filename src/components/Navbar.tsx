"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Blog", href: "#blog" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 0.77, 0.47, 0.97] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/10 shadow-sm" 
          : "bg-background/0"
      )}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto sm:px-6">
        {/* Logo/Brand */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              ADmyBRAND
            </span>
            <motion.span 
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI Suite
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="space-x-1">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                      "text-foreground/80 hover:text-primary hover:bg-primary/5",
                      "relative group"
                    )}
                  >
                    {item.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle - Fixed Hydration */}
          <div className="hidden md:flex">
            {mounted ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleTheme} 
                  className="relative"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              </motion.div>
            ) : (
              <Button variant="ghost" size="icon" aria-hidden="true">
                <div className="w-5 h-5" />
              </Button>
            )}
          </div>

          {/* CTA Button with Sparkles */}
          <div className="relative hidden md:block">
            {mounted && (
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  asChild
                  className={cn(
                    "px-6 py-5 text-sm font-semibold",
                    "bg-gradient-to-r from-primary to-purple-600",
                    "hover:from-primary/90 hover:to-purple-600/90",
                    "relative overflow-hidden"
                  )}
                >
                  <Link href="#contact">
                    <span className="relative z-10">Get Started</span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                    />
                  </Link>
                </Button>
                <Sparkles className={cn(
                  "absolute -top-2 -right-2 h-5 w-5",
                  theme === 'dark' ? 'text-yellow-300' : 'text-primary',
                  "animate-pulse"
                )} />
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              
              <AnimatePresence>
                {mobileMenuOpen && (
                  <SheetContent 
                    side="right" 
                    className="w-full max-w-xs sm:max-w-sm bg-background/95 backdrop-blur-lg border-l border-border/20"
                    asChild
                  >
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                          <Link 
                            href="/" 
                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            ADmyBRAND
                          </Link>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <X className="w-6 h-6" />
                            </Button>
                          </SheetTrigger>
                        </div>

                        <nav className="flex-1 space-y-3">
                          {navItems.map((item) => (
                            <SheetTrigger asChild key={item.href}>
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-accent/50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            </SheetTrigger>
                          ))}
                        </nav>

                        <div className="pt-6 mt-auto space-y-4 border-t border-border/20">
                          <div className="flex justify-center">
                            {mounted ? (
                              <Button 
                                onClick={toggleTheme} 
                                variant="ghost" 
                                className="w-full justify-start px-4 py-3 text-base"
                              >
                                {theme === "dark" ? (
                                  <>
                                    <Sun className="w-5 h-5 mr-3" /> Light Mode
                                  </>
                                ) : (
                                  <>
                                    <Moon className="w-5 h-5 mr-3" /> Dark Mode
                                  </>
                                )}
                              </Button>
                            ) : (
                              <Button variant="ghost" className="w-full justify-start px-4 py-3 text-base" aria-hidden="true">
                                <div className="w-5 h-5 mr-3" />
                                <span className="opacity-0">Loading</span>
                              </Button>
                            )}
                          </div>
                          
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              asChild
                              className="w-full px-6 py-5 text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                            >
                              <Link 
                                href="#contact" 
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Get Started
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </SheetContent>
                )}
              </AnimatePresence>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}