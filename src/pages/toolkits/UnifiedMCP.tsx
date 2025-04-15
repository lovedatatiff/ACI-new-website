
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Network, Cpu, ArrowRight } from 'lucide-react';
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
              Streamlined server management for AI agents with unified controls and monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
