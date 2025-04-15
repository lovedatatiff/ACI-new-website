
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Code, Zap, ArrowRight, Cpu, FileCode, PanelLeft } from 'lucide-react';
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <Tabs defaultValue="overview" className="w-full mb-16">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="metafunctions">Metafunctions</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What is Dynamic App Search?</h3>
                  <p className="text-muted-foreground mb-4">
                    Dynamic App Search is a powerful feature that enables AI agents to discover and utilize functions and applications dynamically at runtime. This capability eliminates the need for hardcoding available functions, making your AI agents more flexible and extensible.
                  </p>
                  <p className="text-muted-foreground">
                    By using Dynamic App Search, your AI agents can adapt to new capabilities as they become available, without requiring code changes or redeployments.
                  </p>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8 flex justify-center">
                      <Search className="h-32 w-32 text-primary/60" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="metafunctions" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Understanding Metafunctions</h3>
                <p className="text-muted-foreground mb-6">
                  Metafunctions are special functions that provide information about other functions available to AI agents. They serve as a bridge between your AI agents and the dynamic ecosystem of functions they can access.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <FileCode className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Function Registry</h3>
                    <p className="text-muted-foreground">
                      A central repository of all available functions with detailed metadata including parameters, return types, and descriptions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <PanelLeft className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Function Browser</h3>
                    <p className="text-muted-foreground">
                      Interactive tools for exploring available functions and understanding their capabilities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Cpu className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Runtime Discovery</h3>
                    <p className="text-muted-foreground">
                      Dynamic discovery of functions at runtime based on context and requirements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <Code className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Function Invocation</h3>
                    <p className="text-muted-foreground">
                      Seamless execution of discovered functions with automatic parameter validation and type checking.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="implementation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Implementation Guide</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementing Dynamic App Search in your AI agents involves several key steps:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Register functions with detailed metadata in the Function Registry</li>
                    <li>Implement metafunctions for discovering and filtering available functions</li>
                    <li>Develop function invocation mechanisms that handle parameter validation</li>
                    <li>Create context-aware function recommendation systems</li>
                    <li>Implement security policies to control function access</li>
                  </ul>
                </div>
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-md bg-background border mb-4">
                      <pre className="text-xs text-muted-foreground overflow-auto"><code>{`// Example of function registration
registerFunction({
  name: "searchProducts",
  description: "Search for products in catalog",
  parameters: [
    { name: "query", type: "string", required: true },
    { name: "limit", type: "number", default: 10 }
  ],
  returns: { type: "array", items: "Product" },
  execute: async (params) => {
    // Implementation details
  }
});`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

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
