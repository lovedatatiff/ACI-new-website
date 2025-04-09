
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Code, Webhook, Shield, Paperclip, Search, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    document.title = 'ACI.dev - Agent-Computer Interface Platform';
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold">ACI.dev</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </a>
              <a href="https://www.aci.dev/docs/introduction/overview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </nav>
            
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="z-10 text-center px-4 max-w-4xl">
            <div className="mb-6">
              <AnimatedText
                text="Agent-Computer Interface Platform"
                tag="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                animationType="words"
                staggerDelay={100}
              />
              <AnimatedText
                text="Build powerful AI agents that can call APIs, navigate websites, and access computer systems—all with secure, cross-category authentication."
                tag="p"
                className="text-lg md:text-xl text-muted-foreground mt-4"
                animationType="lines"
                delay={800}
              />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
              <Button className="px-8 py-6 rounded-full text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-lg">
                View Docs
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
              <ArrowRight className="h-4 w-4 transform rotate-90" />
            </div>
          </div>
        </section>
        
        {/* What is ACI.dev Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Multi-Environment Agents in Minutes</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  ACI.dev enables developers to build agents that can update CRMs, search for information, 
                  send emails, and login to websites without fragmented authentication flows or excessive permissions.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="bg-slate-900 text-white p-6 rounded-lg shadow-lg">
                  <pre className="code-block">
                    <code>
{`// Connect to ACI.dev
const aci = new ACIClient({
  apiKey: process.env.ACI_API_KEY
});

// Create an agent with tool access
const agent = aci.createAgent({
  tools: ["gmail", "hubspot", "slack"],
  authentication: {
    type: "oauth",
    managedBy: "aci"
  }
});

// Execute tasks across tools
await agent.execute(
  "Find all emails from john@example.com 
   and create a HubSpot contact"
);`}
                    </code>
                  </pre>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Unified MCP Server</h3>
                      <p className="mt-2 text-muted-foreground">
                        Connect your MCP client to any tool through a single unified MCP server. 
                        Search, plan, and execute tools by intent with just one connection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Workflow Discovery</h3>
                      <p className="mt-2 text-muted-foreground">
                        Allow AI agents to dynamically discover tools and workflows 
                        best suited to their task at hand.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Secure Authentication</h3>
                      <p className="mt-2 text-muted-foreground">
                        End-users can authorize AI agents with access to their accounts through OAuth.
                        ACI.dev handles all token management and OAuth client setup.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform provides everything you need to create powerful AI agents that 
                  can interact with various tools and services securely.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Webhook className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Pre-built Tool Integrations</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrate essential tools like Gmail, Hubspot, Notion, Slack, 
                      and more to your AI agents with little engineering effort.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Shield className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Managed Agent Authentication</h3>
                    <p className="text-muted-foreground">
                      Allow end-users to authorize your AI agents with access to their accounts through OAuth. 
                      ACI.dev handles all the token pains and OAuth client setups.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Code className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Agent Secrets Manager</h3>
                    <p className="text-muted-foreground">
                      Allow end-users to store and manage credentials for web browsing AI agents. 
                      Set access policies to enhance security and reliability.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Paperclip className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Unified MCP Server</h3>
                    <p className="text-muted-foreground">
                      Connect your MCP client to any tool available on ACI.DEV through a single unified MCP server. 
                      Search, plan, and execute tools by intent with just one connection.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={500}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Search className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Workflow Discovery</h3>
                    <p className="text-muted-foreground">
                      Have the flexibility to allow AI agents to dynamically discover tools
                      and workflows best suited to their task at hand.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Shield className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">API Execution Guardrails</h3>
                    <p className="text-muted-foreground">
                      Set natural language guardrails that prevent API execution when AI agents make unintended
                      API requests. Address AI agent behavior at a sub-endpoint granularity.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Tools Integration Section */}
        <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Tool Integrations</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Connect your AI agents to popular tools and services with minimal setup.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {['Gmail', 'Hubspot', 'Notion', 'Slack', 'Google Drive', 'Salesforce', 'Jira', 'Asana', 'Zendesk', 'Microsoft Teams'].map((tool, index) => (
                <ScrollReveal key={tool} delay={100 * index} direction={index % 2 === 0 ? 'up' : 'down'}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-32 hover:shadow-lg transition-shadow">
                    <span className="text-lg font-medium">{tool}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Build Powerful Multi-Environment Agents
              </h2>
              <p className="mb-8 opacity-90 text-lg">
                Create powerful AI agents in minutes instead of weeks with ACI.dev's secure, 
                cross-category authentication infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">ACI.dev</h3>
              <p className="text-muted-foreground max-w-md">
                Agent-Computer Interface platform that enables developers to build powerful 
                AI agents that interact with tools, websites, and systems securely.
              </p>
              <div className="flex space-x-4 mt-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://www.aci.dev/docs/introduction/overview" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} ACI.dev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
