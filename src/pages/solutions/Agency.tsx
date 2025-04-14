
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Lightbulb, ArrowRight, Check, Layout, Layers, PieChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

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
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold mb-6 text-gradient">Build AI-Powered Workflows for Your Clients</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ACI.dev gives agencies and consultants the tools to create reusable, secure, and scalable AI automations for every client.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary/90 hover:bg-primary group relative overflow-hidden">
                  <span className="relative z-10">Partner With Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Agencies Choose ACI.dev */}
          <ScrollReveal>
            <div className="mb-20 bg-gradient-to-br from-muted/20 via-muted/10 to-transparent rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-10 text-center">Why Agencies Choose ACI.dev</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-5 p-6 bg-background rounded-xl shadow-sm">
                  <div className="mt-1 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Multi-tenant auth support for managing multiple clients</p>
                </div>
                
                <div className="flex items-start gap-5 p-6 bg-background rounded-xl shadow-sm">
                  <div className="mt-1 text-primary">
                    <Layers className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Prebuilt connectors for 250+ tools (Slack, Gmail, Salesforce, etc.)</p>
                </div>
                
                <div className="flex items-start gap-5 p-6 bg-background rounded-xl shadow-sm">
                  <div className="mt-1 text-primary">
                    <Layout className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Reusable agent templates and custom workflows</p>
                </div>
                
                <div className="flex items-start gap-5 p-6 bg-background rounded-xl shadow-sm">
                  <div className="mt-1 text-primary">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <p className="text-lg">White-label and rebranding options</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Core Capabilities */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Core Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Multi-Workspace Support</h3>
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
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Low-Lift Client Integrations</h3>
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
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Expand Your Service Offering</h3>
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
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Example Use Cases */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Example Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-b from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
                  <p className="text-lg">Slack + CRM agents that follow up with leads</p>
                </div>
                
                <div className="bg-gradient-to-b from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
                  <p className="text-lg">AI onboarding bots that trigger tasks across Notion and ClickUp</p>
                </div>
                
                <div className="bg-gradient-to-b from-primary/5 to-transparent rounded-2xl p-8 border border-primary/10">
                  <p className="text-lg">GPT-powered assistants that automate support ticketing</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Agency Partnership Program */}
          <ScrollReveal>
            <div className="mb-20 bg-muted/30 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-10 text-center">Agency Partnership Program</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background p-8 rounded-xl shadow-sm">
                  <p className="text-lg">Co-marketing opportunities</p>
                </div>
                
                <div className="bg-background p-8 rounded-xl shadow-sm">
                  <p className="text-lg">Revenue share for referred clients</p>
                </div>
                
                <div className="bg-background p-8 rounded-xl shadow-sm">
                  <p className="text-lg">Dedicated support + priority access to features</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-primary/5 p-12 rounded-3xl">
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
