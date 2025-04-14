
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationDropdown from '@/components/NavigationDropdown';

const exploreItems = [
  {
    title: "Explore",
    children: [
      {
        group: "Toolkits",
        items: [
          {
            title: "AI Crypto Kit",
            href: "/toolkits/ai-crypto-kit",
            description: "Securely integrate blockchain functionality into your AI agents"
          },
          {
            title: "Agent Secrets Manager",
            href: "/toolkits/agent-secrets-manager",
            description: "Securely store and manage credentials for your AI agents"
          }
        ]
      },
      {
        group: "Solutions",
        items: [
          {
            title: "Enterprise",
            href: "/solutions/enterprise",
            description: "Secure, scalable AI agents for enterprise"
          },
          {
            title: "Startup",
            href: "/solutions/startup",
            description: "Accelerate your startup's growth with AI agents"
          },
          {
            title: "Agency",
            href: "/solutions/agency",
            description: "Deliver cutting-edge AI solutions to your clients"
          }
        ]
      }
    ]
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled 
      ? 'bg-background/90 backdrop-blur-lg py-2 shadow-md' 
      : 'bg-background py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold transition-all duration-300 text-primary">
              ACI.dev
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationDropdown items={exploreItems} />
            
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#tools" className="text-muted-foreground hover:text-foreground transition-colors">
              Integrations
            </Link>
            <Link to="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a href="https://www.aci.dev/docs/introduction/overview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <Link to="/#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
