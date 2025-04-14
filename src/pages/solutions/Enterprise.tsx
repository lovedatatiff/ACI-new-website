
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, Users, ArrowRight, Check, Database, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const Enterprise = () => {
  useEffect(() => {
    document.title = 'Enterprise AI Agent Integration Platform | ACI.dev';
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
              <h1 className="text-5xl font-bold mb-6 text-gradient">Enterprise-Ready AI Agent Integration</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Securely deploy LLM-powered agents across your SaaS and internal tools — with governance, observability, and support built in.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary/90 hover:bg-primary group relative overflow-hidden">
                  <span className="relative z-10">Book a Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pain Points */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Designed for enterprise teams that need:</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50">
                  <div className="mt-1 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Scalable AI integration across multiple business units</p>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50">
                  <div className="mt-1 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Secure OAuth token management and SSO</p>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50">
                  <div className="mt-1 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Custom policies, audit trails, and usage analytics</p>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50">
                  <div className="mt-1 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-lg">Guaranteed uptime, dedicated support, and SLAs</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Core Features */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Core Features</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Secure & Scalable Infrastructure</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>SOC 2 (in progress), data encryption, and token governance</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Granular permission controls and audit logs</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Prebuilt Integrations for 250+ Tools</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Connect AI agents to Slack, Salesforce, Jira, internal APIs, and more</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Abstract away brittle API logic — deploy in hours, not weeks</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Unified Agent Management</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Central dashboard to monitor agent activity across teams and environments</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Built-in observability and error tracking</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Enterprise Support</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Onboarding assistance, custom integrations, and SLAs available</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>SSO & SCIM provisioning for team management</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Example Use Cases */}
          <ScrollReveal>
            <div className="mb-20 bg-muted/30 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-10 text-center">Example Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border-l-4 border-primary bg-background rounded-r-lg">
                  <p className="text-lg">AI agents updating Salesforce after customer meetings</p>
                </div>
                
                <div className="p-6 border-l-4 border-primary bg-background rounded-r-lg">
                  <p className="text-lg">Internal support bots triaging Jira tickets</p>
                </div>
                
                <div className="p-6 border-l-4 border-primary bg-background rounded-r-lg">
                  <p className="text-lg">Automating HR onboarding across BambooHR, Notion, and Gmail</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ Section */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>
              <div className="bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">What makes ACI.dev enterprise-ready?</h3>
                <p className="text-muted-foreground text-lg">
                  We offer robust security, token governance, observability, and integration support designed for teams managing AI agents at scale.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-primary/5 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Ready to deploy AI agents securely?</h2>
              <Button className="px-8 py-7 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                <span>Book a call with our Enterprise team</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
