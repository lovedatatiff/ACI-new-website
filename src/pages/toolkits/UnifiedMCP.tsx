
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Network, Cpu, ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const UnifiedMCP = () => {
  useEffect(() => {
    document.title = 'Unified MCP - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Unified MCP Server</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A unified control panel for managing multiple AI agents and servers from a single interface
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Server className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unified Management</h3>
                <p className="text-muted-foreground">
                  Centralized control panel for managing multiple AI agent servers from a single interface.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Network className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Monitor server performance, resource usage, and agent activities in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Cpu className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resource Optimization</h3>
                <p className="text-muted-foreground">
                  Intelligent resource allocation and load balancing across your agent infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full mb-16">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What is a Unified MCP Server?</h3>
                  <p className="text-muted-foreground mb-4">
                    The Unified MCP (Management Control Panel) Server provides a centralized interface for managing multiple AI agents and servers. It serves as a bridge between developers and their deployed AI agents, offering tools for monitoring, configuration, and resource management.
                  </p>
                  <p className="text-muted-foreground">
                    With the Unified MCP, developers can efficiently manage their AI agents' lifecycle, from deployment to monitoring and scaling, all from a single dashboard.
                  </p>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8 flex justify-center">
                      <Server className="h-32 w-32 text-primary/60" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Globe className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Global Deployment Support</h3>
                    <p className="text-muted-foreground">
                      Deploy and manage AI agents globally with support for various cloud providers and regions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Security & Compliance</h3>
                    <p className="text-muted-foreground">
                      Built-in security features and compliance monitoring to keep your AI agents and data safe.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Auto-scaling</h3>
                    <p className="text-muted-foreground">
                      Intelligent auto-scaling based on resource usage and demand patterns.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Network className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">API Gateway</h3>
                    <p className="text-muted-foreground">
                      Integrated API gateway for secure and efficient communication between your applications and AI agents.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="architecture" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Unified MCP Architecture</h3>
                  <p className="text-muted-foreground mb-4">
                    The Unified MCP Server is built on a scalable architecture that consists of several key components:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Control Layer: Manages authentication, authorization, and user interface rendering</li>
                    <li>Agent Registry: Maintains information about all registered AI agents</li>
                    <li>Monitoring System: Collects and analyzes metrics from deployed agents</li>
                    <li>Resource Manager: Handles resource allocation and scaling decisions</li>
                    <li>API Gateway: Routes and manages API requests to appropriate agents</li>
                  </ul>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8 flex justify-center">
                      <Cpu className="h-32 w-32 text-primary/60" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Get Started with Unified MCP</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedMCP;
