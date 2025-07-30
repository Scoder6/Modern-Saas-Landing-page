"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, Sun, Moon, Sparkles, Mail, Linkedin, Github } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/10" : "bg-background/0"
      )}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ADmyBRAND
          </motion.span>
          <motion.span 
            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI Suite
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle - Fixed hydration */}
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="hidden md:flex relative"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          )}

          <motion.div 
            className="relative hidden md:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              asChild
              className="px-6 py-5 text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
            <Sparkles className={`absolute -top-2 -right-2 h-5 w-5 ${theme === 'dark' ? 'text-yellow-300' : 'text-primary'} animate-pulse`} />
          </motion.div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg border-l border-border/20"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
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
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </SheetTrigger>
                  ))}
                </nav>

                <div className="pt-6 mt-auto space-y-4 border-t border-border/20">
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
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Button 
                      asChild
                      className="w-full px-6 py-5 text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#" },
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Legal", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/10 bg-background/80 backdrop-blur-lg">
      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                ADmyBRAND
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                AI Suite
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The most powerful AI marketing suite for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="mailto:matulchaubey669@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/saptash-chaubey-711a3322a/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Scoder6" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground/80">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground/80">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-sm border rounded-lg border-border/20 bg-background/50 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-12 mt-12 border-t border-border/10">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-center text-muted-foreground md:text-left">
              © {currentYear} ADmyBRAND AI Suite. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}