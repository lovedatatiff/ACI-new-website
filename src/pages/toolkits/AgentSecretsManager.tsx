
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Key, Shield, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Agent Secrets Manager</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Securely store and manage credentials for your AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Lock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-muted-foreground">
                  End-to-end encrypted storage for API keys, passwords, and other sensitive credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Key className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Control</h3>
                <p className="text-muted-foreground">
                  Fine-grained access policies that limit which agents can access which secrets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Audit Logging</h3>
                <p className="text-muted-foreground">
                  Comprehensive audit logs of all access to secrets for security compliance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Get Started with Agent Secrets Manager</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSecretsManager;
