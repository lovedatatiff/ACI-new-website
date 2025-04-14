
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Briefcase, Palette, CreditCard, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';

const Agency = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText
                text="AI for Agencies"
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
                animationType="gradient"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Deliver cutting-edge AI solutions to your clients without the complexity of building from scratch.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Expand Your Agency's Capabilities</h2>
                <p className="text-lg text-muted-foreground">
                  Add AI agents to your service offerings without needing specialized AI expertise. Our white-label platform allows you to deliver sophisticated AI solutions to your clients under your own brand.
                </p>
                <div className="space-y-4">
                  {[
                    "White-label solutions you can brand as your own",
                    "Multi-client management from a single dashboard",
                    "Flexible pricing that improves your margins",
                    "Easy integration with client systems and tools",
                    "Technical support to help you deliver successful projects"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button size="lg" className="rounded-md">
                    Join Agency Partner Program <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Briefcase className="h-24 w-24 text-primary opacity-80" />
                </div>
                <div className="absolute inset-0 border border-primary/20 rounded-xl pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">Agency Benefits</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Client Management",
                  description: "Manage multiple client projects from a unified dashboard with role-based access control."
                },
                {
                  icon: <Palette className="h-10 w-10" />,
                  title: "White Labeling",
                  description: "Customize interfaces with your agency's branding for a seamless client experience."
                },
                {
                  icon: <CreditCard className="h-10 w-10" />,
                  title: "Flexible Billing",
                  description: "Set your own pricing and billing models with our pay-as-you-go infrastructure."
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
                <h2 className="text-2xl font-bold mb-6">Agency Partner Program</h2>
                <p className="text-muted-foreground mb-8">
                  Join our agency partner program to receive training, support, and exclusive discounts.
                </p>
                <Button size="lg" variant="default">
                  Apply Now
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agency;
