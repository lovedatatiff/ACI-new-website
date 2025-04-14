
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Sparkles, ArrowRight, Check, Code, Shield, Timer, Lightbulb, Workflow } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

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
            <div className="text-center mb-24">
              <h1 className="text-5xl font-bold mb-6 text-gradient">Build Your First AI Agent — Fast</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're shipping an MVP or hacking together a GPT-powered product, ACI.dev gets you from idea to working integration in minutes.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                  <span>Try It Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">You're building fast — we help you ship faster</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <SolutionCard 
                  icon={<Code className="h-6 w-6" />}
                  gradient="from-primary/5 via-secondary/10 to-transparent"
                  delay={100}
                >
                  <p className="text-lg">One-line setup to connect GPT to tools like Slack, Gmail, Notion, HubSpot</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Shield className="h-6 w-6" />}
                  gradient="from-primary/5 via-secondary/10 to-transparent"
                  delay={200}
                >
                  <p className="text-lg">No OAuth headaches — we handle auth and API logic</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Lightbulb className="h-6 w-6" />}
                  gradient="from-primary/5 via-secondary/10 to-transparent"
                  delay={300}
                >
                  <p className="text-lg">Add AI-powered actions to your app with just a few lines of code</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Startups Love ACI.dev */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-br from-secondary/10 to-primary/5 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Startups Love ACI.dev</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <SolutionCard 
                  icon={<Rocket className="h-8 w-8" />}
                  title="Prebuilt actions for 250+ tools"
                  gradient="from-transparent to-transparent"
                  delay={100}
                  className="bg-transparent"
                />

                <SolutionCard 
                  icon={<Zap className="h-8 w-8" />}
                  title="Works with any LLM: OpenAI, Anthropic, Mistral, and more"
                  gradient="from-transparent to-transparent"
                  delay={200}
                  className="bg-transparent"
                />

                <SolutionCard 
                  icon={<Shield className="h-8 w-8" />}
                  title="Secure agent execution with built-in rate limiting and retries"
                  gradient="from-transparent to-transparent"
                  delay={300}
                  className="bg-transparent"
                />

                <SolutionCard 
                  icon={<Sparkles className="h-8 w-8" />}
                  title="Free tier for early projects"
                  gradient="from-transparent to-transparent"
                  delay={400}
                  className="bg-transparent"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Use Cases */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <SolutionCard 
                  icon={<Code className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={100}
                >
                  <p className="text-lg">AI assistant that reads emails and updates Notion</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Zap className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={200}
                >
                  <p className="text-lg">GPT bot that pings Slack and updates HubSpot tasks</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Rocket className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={300}
                >
                  <p className="text-lg">One-person team automating investor updates via Gmail</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Startup Success Stories */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Startup Success Stories</h2>
              <div className="bg-gradient-to-br from-accent/20 to-transparent p-10 rounded-3xl">
                <p className="text-2xl italic mb-4">"ACI.dev helped us go from demo to production in under 2 days."</p>
                <p className="text-muted-foreground text-lg">– Alice Zhang, Founder @ seed-stage SaaS company</p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-primary/10 to-accent/5 p-12 rounded-3xl">
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
