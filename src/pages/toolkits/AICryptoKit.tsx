
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Key, Code, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">AI Crypto Kit</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your AI agents with secure blockchain functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Enable your AI agents to securely send and receive cryptocurrency with built-in safety guardrails.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Key className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Key Management</h3>
                <p className="text-muted-foreground">
                  Robust private key management with role-based access control and multi-signature support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Code className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Contract Integration</h3>
                <p className="text-muted-foreground">
                  Interact with smart contracts across multiple chains with a unified API interface.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Get Started with AI Crypto Kit</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICryptoKit;
