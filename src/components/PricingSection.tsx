
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
    name: "Free",
    description: "For individuals just getting started with AI agents",
    price: "$0",
    priceDetail: "forever",
    features: [
      { text: "1 AI agent", included: true },
      { text: "20 API calls per day", included: true },
      { text: "2 tool integrations", included: true },
      { text: "Basic authentication", included: true },
      { text: "Community support", included: true },
      { text: "Workflow discovery", included: false },
      { text: "Custom domain", included: false },
      { text: "Team collaboration", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
  },
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
    gradient: "from-[#6269D2]/20 via-[#8D94E1]/20 to-[#B7BFFE]/20",
  }
];

// Enterprise features for the custom solution box
const enterpriseFeatures = [
  "Unlimited AI agents",
  "Unlimited API calls",
  "All tool integrations",
  "Enterprise authentication (SSO, SCIM, Identity Provider integration)",
  "Advanced workflow discovery",
  "Multiple custom domains",
  "Team & role management",
  "Advanced analytics & reporting",
  "Dedicated support",
  "White-labeling"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
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
                ${tier.popular ? 'border-[#6269D2] shadow-lg shadow-[#6269D2]/20' : ''}
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              `}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 rotate-12">
                    <div className="bg-[#6269D2] text-white text-xs px-6 py-1 rounded-full font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {tier.gradient && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-40 z-0`}></div>
                )}
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#6269D2]">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.priceDetail}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#6269D2] mr-2 flex-shrink-0" />
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
                    className={`w-full ${tier.popular ? 'bg-[#6269D2] hover:bg-[#6269D2]/90' : 'border-[#6269D2] text-[#6269D2] hover:bg-[#6269D2]/10'}`}
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
            <div className="bg-gradient-to-r from-[#6269D2]/10 to-[#B7BFFE]/10 p-8 rounded-lg max-w-4xl mx-auto border border-[#8D94E1]/20">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="mb-6 text-muted-foreground">
                For organizations with complex AI agent needs. Includes custom features, dedicated support, and volume discounts.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-left max-w-3xl mx-auto">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#6269D2] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="default" className="bg-[#6269D2] hover:bg-[#6269D2]/90">
                  Contact Sales
                </Button>
                <Button variant="outline" className="border-[#6269D2] text-[#6269D2] hover:bg-[#6269D2]/10 ml-4">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
