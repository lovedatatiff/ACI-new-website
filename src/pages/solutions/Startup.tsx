
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Zap, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Startup = () => {
  useEffect(() => {
    document.title = 'Startup Solutions - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Startup Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Accelerate your startup's growth with powerful AI agent infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Rocket className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Time-to-Market</h3>
                <p className="text-muted-foreground">
                  Launch AI-powered features quickly without building complex infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Startup-Friendly Pricing</h3>
                <p className="text-muted-foreground">
                  Flexible pricing plans that scale with your business as you grow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Guidance</h3>
                <p className="text-muted-foreground">
                  Access to our experts to help you implement AI agents effectively.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Start your AI journey</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
