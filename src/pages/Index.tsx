
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AnimationDemo from '@/components/AnimationDemo';
import CodeExample from '@/components/CodeExample';
import Features from '@/components/Features';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'Scroll Reveal Animation Library';
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold">AnimateScroll</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#demos" className="text-muted-foreground hover:text-foreground transition-colors">
                Demos
              </a>
              <a href="#code" className="text-muted-foreground hover:text-foreground transition-colors">
                Code
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </nav>
            
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        
        <div id="demos">
          <AnimationDemo />
        </div>
        
        <div id="code">
          <CodeExample />
        </div>
        
        <div id="features">
          <Features />
        </div>
        
        <section className="section-container bg-primary text-primary-foreground">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Bring Your Website to Life?
              </h2>
              <p className="mb-8 opacity-90">
                Start implementing beautiful scroll animations today with our easy-to-use library.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">AnimateScroll</h3>
              <p className="text-muted-foreground max-w-md">
                A lightweight, high-performance library for creating beautiful scroll-reveal animations
                that bring your web applications to life.
              </p>
              <div className="flex space-x-4 mt-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} AnimateScroll. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
