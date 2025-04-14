
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Shield, Bitcoin, Lock, Code, Database } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';

const AICryptoKit = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText
                text="AI Crypto Kit"
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
                animationType="gradient"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Securely integrate blockchain functionality into your AI agents with our comprehensive AI Crypto Kit.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Bitcoin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Blockchain Integration</h3>
                    <p className="mt-2 text-muted-foreground">
                      Enable your AI agents to interact with multiple blockchain networks, execute transactions, and query on-chain data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Enhanced Security</h3>
                    <p className="mt-2 text-muted-foreground">
                      Built-in security protocols ensure that your AI agents interact with blockchain networks without compromising private keys.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Smart Contract Integration</h3>
                    <p className="mt-2 text-muted-foreground">
                      Easily connect your AI agents to smart contracts across multiple networks with pre-built connectors.
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
{`// Create an AI Crypto Agent
const cryptoAgent = new ACICryptoAgent({
  apiKey: process.env.ACI_API_KEY,
  networks: ["ethereum", "polygon", "solana"]
});

// Execute a blockchain transaction
await cryptoAgent.execute(
  "Transfer 0.1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
);

// Query on-chain data
const balance = await cryptoAgent.query(
  "Get the current balance of 0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
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
                  icon: <Database className="h-10 w-10" />,
                  title: "Multi-chain Support",
                  description: "Connect to Ethereum, Polygon, Solana, and other major blockchain networks."
                },
                {
                  icon: <Lock className="h-10 w-10" />,
                  title: "Secure Key Management",
                  description: "Safely manage private keys and credentials with our secure vault system."
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Simple API",
                  description: "Intuitive API that allows AI agents to interact with blockchain with natural language."
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
                Get Started with AI Crypto Kit <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICryptoKit;
