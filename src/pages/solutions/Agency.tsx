
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Lightbulb, ArrowRight, Check, Layout, Layers, PieChart } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Build AI-Powered Workflows for Your Clients</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ACI.dev gives agencies and consultants the tools to create reusable, secure, and scalable AI automations for every client.
            </p>
            <div className="mt-8">
              <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
                <span className="relative z-10">Partner With Us</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Why Agencies Choose ACI.dev */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Agencies Choose ACI.dev</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Multi-tenant auth support for managing multiple clients</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Layers className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Prebuilt connectors for 250+ tools (Slack, Gmail, Salesforce, etc.)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Layout className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Reusable agent templates and custom workflows</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <p className="text-lg">White-label and rebranding options</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Briefcase className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Workspace Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Manage separate environments and credentials for each client</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Ensure data isolation and agent behavior customization</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Low-Lift Client Integrations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Skip building and maintaining APIs manually</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Launch GPT-enabled workflows in hours, not weeks</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Lightbulb className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expand Your Service Offering</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Add AI automation to your digital service portfolio</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Offer clients smart agents for operations, marketing, and support</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Example Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Example Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Slack + CRM agents that follow up with leads</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">AI onboarding bots that trigger tasks across Notion and ClickUp</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">GPT-powered assistants that automate support ticketing</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Agency Partnership Program */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Agency Partnership Program</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Co-marketing opportunities</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Revenue share for referred clients</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Dedicated support + priority access to features</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Become an ACI-Certified Integrator</h2>
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Apply to Partner Program</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
