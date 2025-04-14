
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Shield, Users, ArrowRight, Check, Database, Zap, Briefcase, Server, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

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
            <div className="text-center mb-24">
              <h1 className="text-5xl font-bold mb-6 text-gradient">Enterprise-Ready AI Agent Integration</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Securely deploy LLM-powered agents across your SaaS and internal tools — with governance, observability, and support built in.
              </p>
              <div className="mt-10">
                <Button className="px-6 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group">
                  <span>Book a Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pain Points */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Designed for enterprise teams that need:</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Server className="h-6 w-6" />,
                    text: "Scalable AI integration across multiple business units"
                  },
                  {
                    icon: <Lock className="h-6 w-6" />,
                    text: "Secure OAuth token management and SSO"
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    text: "Custom policies, audit trails, and usage analytics"
                  },
                  {
                    icon: <Check className="h-6 w-6" />,
                    text: "Guaranteed uptime, dedicated support, and SLAs"
                  }
                ].map((item, i) => (
                  <SolutionCard 
                    key={i}
                    icon={item.icon}
                    delay={i * 100}
                    gradient="from-primary/5 via-secondary/10 to-transparent"
                  >
                    <p className="text-lg">{item.text}</p>
                  </SolutionCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Core Features */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <SolutionCard 
                  icon={<Shield className="h-8 w-8" />}
                  title="Secure & Scalable Infrastructure"
                  gradient="from-secondary/10 via-accent/5 to-transparent"
                >
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
                </SolutionCard>

                <SolutionCard 
                  icon={<Database className="h-8 w-8" />}
                  title="Prebuilt Integrations for 250+ Tools"
                  gradient="from-secondary/10 via-accent/5 to-transparent"
                  delay={100}
                >
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
                </SolutionCard>

                <SolutionCard 
                  icon={<Users className="h-8 w-8" />}
                  title="Unified Agent Management"
                  gradient="from-secondary/10 via-accent/5 to-transparent"
                  delay={200}
                >
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
                </SolutionCard>

                <SolutionCard 
                  icon={<Building className="h-8 w-8" />}
                  title="Enterprise Support"
                  gradient="from-secondary/10 via-accent/5 to-transparent"
                  delay={300}
                >
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
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Example Use Cases */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-12 text-center">Example Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <SolutionCard 
                  icon={<Database className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={100}
                >
                  <p className="text-lg">AI agents updating Salesforce after customer meetings</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Shield className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={200}
                >
                  <p className="text-lg">Internal support bots triaging Jira tickets</p>
                </SolutionCard>
                
                <SolutionCard 
                  icon={<Users className="h-6 w-6" />}
                  gradient="from-background/80 to-background/30"
                  delay={300}
                >
                  <p className="text-lg">Automating HR onboarding across BambooHR, Notion, and Gmail</p>
                </SolutionCard>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ Section */}
          <ScrollReveal>
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-10 rounded-3xl">
                <h3 className="text-xl font-semibold mb-4">What makes ACI.dev enterprise-ready?</h3>
                <p className="text-muted-foreground text-lg">
                  We offer robust security, token governance, observability, and integration support designed for teams managing AI agents at scale.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-primary/10 to-accent/5 p-12 rounded-3xl">
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
