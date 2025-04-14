
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Enterprise = () => {
  useEffect(() => {
    document.title = 'Enterprise Solutions - ACI.dev';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Enterprise Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure, scalable AI agent infrastructure for enterprise organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Building className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground">
                  SOC 2 compliant infrastructure with SSO, role-based access controls, and audit logging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
                <p className="text-muted-foreground">
                  Keep your data private with dedicated environments and custom data retention policies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  White-glove implementation and 24/7 technical support from our engineering team.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="px-6 py-6 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10">Contact Enterprise Sales</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
