
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Key, Code, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import SolutionCard from '@/components/SolutionCard';

const AICryptoKit = () => {
  useEffect(() => {
    document.title = 'AI Crypto Kit - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6 text-gradient">AI Crypto Kit</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empower your AI agents with secure blockchain functionality
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard 
              icon={<Shield className="h-10 w-10" />}
              title="Secure Transactions"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={100}
            >
              <p>
                Enable your AI agents to securely send and receive cryptocurrency with built-in safety guardrails.
              </p>
            </SolutionCard>

            <SolutionCard 
              icon={<Key className="h-10 w-10" />}
              title="Key Management"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={200}
            >
              <p>
                Robust private key management with role-based access control and multi-signature support.
              </p>
            </SolutionCard>

            <SolutionCard 
              icon={<Code className="h-10 w-10" />}
              title="Smart Contract Integration"
              gradient="from-primary/10 via-secondary/5 to-transparent"
              delay={300}
            >
              <p>
                Interact with smart contracts across multiple chains with a unified API interface.
              </p>
            </SolutionCard>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <Button className="px-6 py-6 rounded-full text-lg bg-primary hover:bg-primary/90 group relative overflow-hidden">
                <span className="relative z-10">Get Started with AI Crypto Kit</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default AICryptoKit;
