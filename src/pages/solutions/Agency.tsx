
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Lightbulb, ArrowRight, Check, Layout, Layers, PieChart, Lock, Database, Code, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

const Agency = () => {
  useEffect(() => {
    document.title = 'AI Agent Platform for Agencies & Integrators | ACI.dev';
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
              <h1 className="text-5xl font-bold mb-6 text-gradient">Build AI-Powered Workflows for Your Clients</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ACI.dev gives agencies and consultants the tools to create reusable, secure, and scalable AI automations for every client.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                  <span>Partner With Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Agencies Choose ACI.dev */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-br from-secondary/10 to-primary/5 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Agencies Choose ACI.dev</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <SolutionCard 
                  icon={<Users className="h-6 w-6" />}
                  gradient="from-transparent to-transparent"
                  delay={100}
                  className="bg-transparent"
                >
                  <p className="text-lg">Multi-tenant auth support for managing multiple clients</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Layers className="h-6 w-6" />}
                  gradient="from-transparent to-transparent"
                  delay={200}
                  className="bg-transparent"
                >
                  <p className="text-lg">Prebuilt connectors for 250+ tools (Slack, Gmail, Salesforce, etc.)</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Layout className="h-6 w-6" />}
                  gradient="from-transparent to-transparent"
                  delay={300}
                  className="bg-transparent"
                >
                  <p className="text-lg">Reusable agent templates and custom workflows</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<PieChart className="h-6 w-6" />}
                  gradient="from-transparent to-transparent"
                  delay={400}
                  className="bg-transparent"
                >
                  <p className="text-lg">White-label and rebranding options</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Core Capabilities */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-10">
                <SolutionCard 
                  icon={<Briefcase className="h-8 w-8" />}
                  title="Multi-Workspace Support"
                  gradient="from-primary/5 via-secondary/5 to-transparent"
                  delay={100}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Manage separate environments and credentials for each client</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Ensure data isolation and agent behavior customization</p>
                    </li>
                  </ul>
                </SolutionCard>

                <SolutionCard 
                  icon={<Users className="h-8 w-8" />}
                  title="Low-Lift Client Integrations" 
                  gradient="from-primary/5 via-secondary/5 to-transparent"
                  delay={200}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Skip building and maintaining APIs manually</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Launch GPT-enabled workflows in hours, not weeks</p>
                    </li>
                  </ul>
                </SolutionCard>

                <SolutionCard 
                  icon={<Lightbulb className="h-8 w-8" />}
                  title="Expand Your Service Offering"
                  gradient="from-primary/5 via-secondary/5 to-transparent"
                  delay={300}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Add AI automation to your digital service portfolio</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Offer clients smart agents for operations, marketing, and support</p>
                    </li>
                  </ul>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Example Use Cases */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Example Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <SolutionCard 
                  icon={<Database className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={100}
                >
                  <p className="text-lg">Slack + CRM agents that follow up with leads</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Code className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={200}
                >
                  <p className="text-lg">AI onboarding bots that trigger tasks across Notion and ClickUp</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Share2 className="h-6 w-6" />}
                  gradient="from-secondary/10 to-transparent"
                  delay={300}
                >
                  <p className="text-lg">GPT-powered assistants that automate support ticketing</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Agency Partnership Program */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-12 text-center">Agency Partnership Program</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <SolutionCard 
                  icon={<Users className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={100}
                >
                  <p className="text-lg">Co-marketing opportunities</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<PieChart className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={200}
                >
                  <p className="text-lg">Revenue share for referred clients</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Layers className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={300}
                >
                  <p className="text-lg">Dedicated support + priority access to features</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-primary/10 to-accent/5 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Become an ACI-Certified Integrator</h2>
              <Button className="px-8 py-7 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                <span>Apply to Partner Program</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Agency;
