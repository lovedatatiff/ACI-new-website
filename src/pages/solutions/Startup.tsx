
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Sparkles, ArrowRight, Check, Code, Timer, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const Startup = () => {
  useEffect(() => {
    document.title = 'AI Agent Platform for Startups & Builders | ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold mb-6 text-gradient">Build Your First AI Agent — Fast</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're shipping an MVP or hacking together a GPT-powered product, ACI.dev gets you from idea to working integration in minutes.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary/90 hover:bg-primary group relative overflow-hidden">
                  <span className="relative z-10">Try It Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">You're building fast — we help you ship faster</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-start p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mb-4 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <p className="text-lg">One-line setup to connect GPT to tools like Slack, Gmail, Notion, HubSpot</p>
                </div>
                
                <div className="flex flex-col items-start p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mb-4 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="text-lg">No OAuth headaches — we handle auth and API logic</p>
                </div>
                
                <div className="flex flex-col items-start p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mb-4 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Add AI-powered actions to your app with just a few lines of code</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Startups Love ACI.dev */}
          <ScrollReveal>
            <div className="mb-20 bg-gradient-to-br from-secondary/10 to-primary/5 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold mb-10 text-center">Why Startups Love ACI.dev</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prebuilt actions for 250+ tools</h3>
                </div>

                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Works with any LLM: OpenAI, Anthropic, Mistral, and more</h3>
                </div>

                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure agent execution with built-in rate limiting and retries</h3>
                </div>

                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Free tier for early projects</h3>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Use Cases */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-sm">
                  <p className="text-lg">AI assistant that reads emails and updates Notion</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-sm">
                  <p className="text-lg">GPT bot that pings Slack and updates HubSpot tasks</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-sm">
                  <p className="text-lg">One-person team automating investor updates via Gmail</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Startup Success Stories */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Startup Success Stories</h2>
              <div className="bg-muted/20 p-10 rounded-2xl">
                <p className="text-2xl italic mb-4">"ACI.dev helped us go from demo to production in under 2 days."</p>
                <p className="text-muted-foreground text-lg">– Alice Zhang, Founder @ seed-stage SaaS company</p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-primary/5 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Ready to ship your first AI agent?</h2>
              <Button className="px-8 py-7 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                <span>Start Building</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Startup;
