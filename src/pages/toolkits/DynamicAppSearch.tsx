
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Code, Zap, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const DynamicAppSearch = () => {
  useEffect(() => {
    document.title = 'Dynamic App Search - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Dynamic App & Function Search</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent discovery and integration of functions for AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Search className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Discovery</h3>
                <p className="text-muted-foreground">
                  Automatically discover and index functions across your entire agent ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Code className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Effortlessly integrate discovered functions into your AI agents' workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                <p className="text-muted-foreground">
                  Stay synchronized with real-time updates to function availability and capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Get Started with Dynamic App Search</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicAppSearch;
