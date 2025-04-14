
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Zap, Sparkles, ArrowRight, Check, Code, Timer, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Startup = () => {
  useEffect(() => {
    document.title = 'AI Agent Platform for Startups & Builders | ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Build Your First AI Agent — Fast</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're shipping an MVP or hacking together a GPT-powered product, ACI.dev gets you from idea to working integration in minutes.
            </p>
            <div className="mt-8">
              <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
                <span className="relative z-10">Try It Free</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">You're building fast — we help you ship faster</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Code className="h-5 w-5" />
                    </div>
                    <p className="text-lg">One-line setup to connect GPT to tools like Slack, Gmail, Notion, HubSpot</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <p className="text-lg">No OAuth headaches — we handle auth and API logic</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Code className="h-5 w-5" />
                    </div>
                    <p className="text-lg">Add AI-powered actions to your app with just a few lines of code</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Startups Love ACI.dev */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Startups Love ACI.dev</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Rocket className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prebuilt actions for 250+ tools</h3>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Zap className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Works with any LLM: OpenAI, Anthropic, Mistral, and more</h3>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Shield className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure agent execution with built-in rate limiting and retries</h3>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Sparkles className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Free tier for early projects</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">AI assistant that reads emails and updates Notion</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">GPT bot that pings Slack and updates HubSpot tasks</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg">One-person team automating investor updates via Gmail</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Startup Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Startup Success Stories</h2>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <p className="text-xl italic mb-4">"ACI.dev helped us go from demo to production in under 2 days."</p>
                <p className="text-muted-foreground">– Alice Zhang, Founder @ seed-stage SaaS company</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to ship your first AI agent?</h2>
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Start Building</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
