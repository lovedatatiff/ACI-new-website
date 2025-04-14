
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, Key, Shield, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

const AgentSecretsManager = () => {
  useEffect(() => {
    document.title = 'Agent Secrets Manager - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6 text-gradient">Agent Secrets Manager</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Securely store and manage credentials for your AI agents
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard 
              icon={<Lock className="h-10 w-10" />}
              title="Secure Storage"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={100}
            >
              <p>
                End-to-end encrypted storage for API keys, passwords, and other sensitive credentials.
              </p>
            </SolutionCard>

            <SolutionCard 
              icon={<Key className="h-10 w-10" />}
              title="Access Control"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={200}
            >
              <p>
                Fine-grained access policies that limit which agents can access which secrets.
              </p>
            </SolutionCard>

            <SolutionCard 
              icon={<Shield className="h-10 w-10" />}
              title="Audit Logging"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={300}
            >
              <p>
                Comprehensive audit logs of all access to secrets for security compliance.
              </p>
            </SolutionCard>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <Button className="px-6 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group relative overflow-hidden">
                <span className="relative z-10">Get Started with Agent Secrets Manager</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default AgentSecretsManager;
