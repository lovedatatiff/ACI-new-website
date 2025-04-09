
import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type PricingTier = {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
  cta: string;
  popular?: boolean;
  gradient?: string;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started with AI agents",
    price: "$29",
    priceDetail: "per month",
    features: [
      { text: "3 AI agents", included: true },
      { text: "100 API calls per day", included: true },
      { text: "5 tool integrations", included: true },
      { text: "Basic authentication", included: true },
      { text: "Email support", included: true },
      { text: "Workflow discovery", included: false },
      { text: "Custom domain", included: false },
      { text: "Team collaboration", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "For teams building advanced AI agents",
    price: "$99",
    priceDetail: "per month",
    features: [
      { text: "10 AI agents", included: true },
      { text: "1,000 API calls per day", included: true },
      { text: "20 tool integrations", included: true },
      { text: "Advanced authentication", included: true, tooltip: "Includes SSO, MFA, and custom OAuth providers" },
      { text: "Workflow discovery", included: true },
      { text: "Custom domain", included: true },
      { text: "Team collaboration", included: true },
      { text: "Basic analytics", included: true },
      { text: "Priority email support", included: true },
      { text: "White-labeling", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-primary/20 via-blue-500/20 to-violet-500/20",
  },
  {
    name: "Enterprise",
    description: "For organizations with complex AI agent needs",
    price: "Custom",
    priceDetail: "contact sales",
    features: [
      { text: "Unlimited AI agents", included: true },
      { text: "Unlimited API calls", included: true },
      { text: "All tool integrations", included: true },
      { text: "Enterprise authentication", included: true, tooltip: "Includes SSO, SCIM, and dedicated Identity Provider integration" },
      { text: "Advanced workflow discovery", included: true },
      { text: "Multiple custom domains", included: true },
      { text: "Team & role management", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Dedicated support", included: true },
      { text: "White-labeling", included: true },
    ],
    cta: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Pricing for Every Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs, from individual developers to enterprise teams
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal 
              key={tier.name} 
              delay={100 * index}
              direction={index === 1 ? "up" : "scale"}
            >
              <Card className={`
                h-full relative overflow-hidden flex flex-col
                ${tier.popular ? 'border-primary shadow-lg shadow-primary/10' : ''}
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              `}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 rotate-12">
                    <div className="bg-primary text-white text-xs px-6 py-1 rounded-full font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {tier.gradient && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-30 z-0`}></div>
                )}
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.priceDetail}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border border-muted-foreground/30 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                        
                        {feature.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-1.5 text-muted-foreground/70 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="relative z-10 pt-4">
                  <Button 
                    variant={tier.popular ? "default" : "outline"} 
                    className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <ScrollReveal delay={400}>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
              <p className="mb-4 text-muted-foreground">
                Our enterprise plan includes custom features, dedicated support, and volume discounts.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Schedule a Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
