
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Shield, Key, Lock, Code, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';

const AgentSecretsManager = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText
                text="Agent Secrets Manager"
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
                animationType="gradient"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Securely store and manage credentials for your AI agents to access various systems and services.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Secure Credential Storage</h3>
                    <p className="mt-2 text-muted-foreground">
                      Store API keys, passwords, and other sensitive information with end-to-end encryption.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Access Control</h3>
                    <p className="mt-2 text-muted-foreground">
                      Fine-grained access policies define which agents can access which secrets, preventing unauthorized use.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Audit and Monitoring</h3>
                    <p className="mt-2 text-muted-foreground">
                      Comprehensive logging of all access attempts helps you track how your secrets are being used.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-slate-900 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <pre className="code-block relative z-10">
                  <code>
{`// Create an agent with secure secrets access
const agent = new ACIAgent({
  apiKey: process.env.ACI_API_KEY,
  secretsManager: {
    enabled: true,
    policies: [
      {
        name: "database-access",
        description: "Access to production database",
        allowedServices: ["mongodb", "postgres"]
      }
    ]
  }
});

// Agent securely accesses credentials without exposing them
await agent.execute(
  "Connect to the production database and 
   summarize the latest transactions"
);`}
                  </code>
                </pre>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="h-10 w-10" />,
                  title: "Secure Vault",
                  description: "Military-grade encryption protects all stored credentials from unauthorized access."
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Simple API",
                  description: "Easy integration with your existing AI agent workflows through our intuitive API."
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Compliance Ready",
                  description: "Built with SOC 2, GDPR, and other regulatory requirements in mind to support your compliance needs."
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
          
          <div className="mt-20 text-center">
            <ScrollReveal>
              <Button size="lg" className="rounded-full px-8 py-6">
                Start Secure Agent Development <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentSecretsManager;
