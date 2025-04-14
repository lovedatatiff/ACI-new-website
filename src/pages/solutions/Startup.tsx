
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Rocket, Zap, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';

const Startup = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText
                text="AI for Startups"
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
                animationType="gradient"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Accelerate your startup's growth with AI agents that integrate with your tools and automate workflows.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Build Faster, Scale Smarter</h2>
                <p className="text-lg text-muted-foreground">
                  Startups need to move quickly and efficiently. Our platform lets you build AI agents that can automate repetitive tasks, handle customer interactions, and integrate with your stack without requiring a large engineering team.
                </p>
                <div className="space-y-4">
                  {[
                    "Quick implementation with minimal engineering resources",
                    "Pay-as-you-grow pricing that scales with your business",
                    "Ready-made integrations with popular startup tools",
                    "No need to build authentication infrastructure",
                    "Focus on your core product while AI handles the rest"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button size="lg" className="rounded-md">
                    Start Your Free Trial <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Rocket className="h-24 w-24 text-primary opacity-80" />
                </div>
                <div className="absolute inset-0 border border-primary/20 rounded-xl pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">Perfect for Growing Startups</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-10 w-10" />,
                  title: "Rapid Implementation",
                  description: "Get up and running in days, not months, with pre-built components and simplified integration."
                },
                {
                  icon: <TrendingUp className="h-10 w-10" />,
                  title: "Scalable Architecture",
                  description: "Our infrastructure grows with you from MVP to unicorn without requiring redesign."
                },
                {
                  icon: <Lightbulb className="h-10 w-10" />,
                  title: "Innovation Enablement",
                  description: "Focus on your unique value proposition while we handle the AI infrastructure challenges."
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={100 * index}>
                  <div className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-card">
                    <div className="mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <div className="mt-24 bg-muted p-8 rounded-lg">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Startup Special Offer</h2>
                <p className="text-muted-foreground mb-8">
                  Qualified startups can receive credits worth up to $25,000 to build on our platform.
                </p>
                <Button size="lg" variant="default">
                  Apply for Startup Program
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startup;
