
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, Users, ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Enterprise-Ready AI Agent Integration</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Securely deploy LLM-powered agents across your SaaS and internal tools — with governance, observability, and support built in.
            </p>
            <div className="mt-8">
              <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Pain Points */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Designed for enterprise teams that need:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Scalable AI integration across multiple business units</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Secure OAuth token management and SSO</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Custom policies, audit trails, and usage analytics</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Guaranteed uptime, dedicated support, and SLAs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Shield className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Scalable Infrastructure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>SOC 2 (in progress), data encryption, and token governance</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Granular permission controls and audit logs</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Building className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prebuilt Integrations for 250+ Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Connect AI agents to Slack, Salesforce, Jira, internal APIs, and more</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Abstract away brittle API logic — deploy in hours, not weeks</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unified Agent Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Central dashboard to monitor agent activity across teams and environments</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Built-in observability and error tracking</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>Onboarding assistance, custom integrations, and SLAs available</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>SSO & SCIM provisioning for team management</p>
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
                  <p className="text-lg">AI agents updating Salesforce after customer meetings</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Internal support bots triaging Jira tickets</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">Automating HR onboarding across BambooHR, Notion, and Gmail</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">What makes ACI.dev enterprise-ready?</h3>
                <p className="text-muted-foreground">
                  We offer robust security, token governance, observability, and integration support designed for teams managing AI agents at scale.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to deploy AI agents securely?</h2>
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Book a call with our Enterprise team</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
