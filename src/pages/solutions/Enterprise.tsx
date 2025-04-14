
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Shield, Building, Server, Users, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';

const Enterprise = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText
                text="Enterprise Solutions"
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
                animationType="gradient"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Empower your enterprise with secure, scalable AI agents that integrate with your existing systems.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Transform Your Enterprise with AI Agents</h2>
                <p className="text-lg text-muted-foreground">
                  Our enterprise solutions provide secure, reliable, and scalable AI agent infrastructure that connects to your existing tools, databases, and systems. Build AI agents that respect your organization's security policies and compliance requirements.
                </p>
                <div className="space-y-4">
                  {[
                    "Secure integration with enterprise systems",
                    "Customizable authentication workflows",
                    "SOC 2, GDPR, and HIPAA compliant",
                    "Single Sign-On (SSO) and SAML support",
                    "Dedicated support and implementation assistance"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button size="lg" className="rounded-md">
                    Contact Enterprise Sales <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Building className="h-24 w-24 text-primary opacity-80" />
                </div>
                <div className="absolute inset-0 border border-primary/20 rounded-xl pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">Enterprise Features</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Enterprise-grade Security",
                  description: "End-to-end encryption, role-based access control, and security best practices built-in."
                },
                {
                  icon: <Server className="h-10 w-10" />,
                  title: "Private Deployment",
                  description: "Deploy in your own cloud environment or on-premises for complete control."
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Team Collaboration",
                  description: "Built-in tools for teams to collaborate on AI agent development and management."
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
                <h2 className="text-2xl font-bold mb-6">Request a Custom Enterprise Demo</h2>
                <p className="text-muted-foreground mb-8">
                  See how our platform can be tailored to your organization's specific needs with a personalized demo.
                </p>
                <Button size="lg" variant="default">
                  Schedule Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
