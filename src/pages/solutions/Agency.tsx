
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Lightbulb, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Agency = () => {
  useEffect(() => {
    document.title = 'Agency Solutions - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Agency Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deliver cutting-edge AI solutions to your clients with our agency platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Briefcase className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">White-Label Solutions</h3>
                <p className="text-muted-foreground">
                  Fully customizable AI agent platform that you can brand as your own.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-Client Management</h3>
                <p className="text-muted-foreground">
                  Manage multiple client projects from a single dashboard with team permissions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Lightbulb className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation Partner</h3>
                <p className="text-muted-foreground">
                  Early access to new features and joint marketing opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Become an Agency Partner</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
