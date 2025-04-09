
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import AnimatedParticles from '@/components/AnimatedParticles';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Code, Webhook, Shield, Paperclip, Search, Zap, ExternalLink, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// List of tools with their logos
const tools = [
  { name: 'Gmail', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png' },
  { name: 'Hubspot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png' },
  { name: 'Google Drive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png' },
  { name: 'Jira', logo: 'https://wac-cdn.atlassian.com/dam/jcr:b544631f-b225-441b-9e05-57b7fd0d495b/Jira%20Software@2x-icon-blue.png' },
  { name: 'Asana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png' },
  { name: 'Zendesk', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zendesk_logo.svg/2560px-Zendesk_logo.svg.png' },
  { name: 'Microsoft Teams', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png' },
  { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Google Calendar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/640px-Google_Calendar_icon_%282020%29.svg.png' },
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png' },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png' },
  { name: 'Twilio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/1280px-Twilio-logo-red.svg.png' }
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    document.title = 'ACI.dev - Agent-Computer Interface Platform';
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Animated Particles Background */}
      <AnimatedParticles color="#646cff" count={80} />
      
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled 
        ? 'bg-background/90 backdrop-blur-lg py-2 shadow-md' 
        : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-xl font-bold transition-all duration-300 ${scrolled ? 'text-foreground' : 'text-primary'}`}>
                ACI.dev
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </a>
              <a href="https://www.aci.dev/docs/introduction/overview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </nav>
            
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="z-10 text-center px-4 max-w-4xl">
            <div className="mb-6">
              <AnimatedText
                text="Agent-Computer Interface Platform"
                tag="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                animationType="gradient"
                gradient="from-primary via-blue-500 to-violet-500"
                staggerDelay={100}
              />
              <AnimatedText
                text="Build powerful AI agents that can call APIs, navigate websites, and access computer systems—all with secure, cross-category authentication."
                tag="p"
                className="text-lg md:text-xl text-muted-foreground mt-4"
                animationType="typewriter"
                delay={1000}
              />
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <ScrollReveal direction="up" delay={1400}>
                <Button className="px-8 py-6 rounded-full text-lg group relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={1600}>
                <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-2 hover:bg-background/10">
                  View Docs
                </Button>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#overview" className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center group">
              <ChevronDown className="h-6 w-6 text-primary group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </section>
        
        {/* What is ACI.dev Section */}
        <section id="overview" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <AnimatedText
                  text="Create Multi-Environment Agents in Minutes"
                  tag="h2"
                  className="text-3xl md:text-4xl font-bold mb-4"
                  animationType="gradient"
                />
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  ACI.dev enables developers to build agents that can update CRMs, search for information, 
                  send emails, and login to websites without fragmented authentication flows or excessive permissions.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="scale" delay={200}>
                <div className="bg-slate-900 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <pre className="code-block relative z-10">
                    <code>
{`// Connect to ACI.dev
const aci = new ACIClient({
  apiKey: process.env.ACI_API_KEY
});

// Create an agent with tool access
const agent = aci.createAgent({
  tools: ["gmail", "hubspot", "slack"],
  authentication: {
    type: "oauth",
    managedBy: "aci"
  }
});

// Execute tasks across tools
await agent.execute(
  "Find all emails from john@example.com 
   and create a HubSpot contact"
);`}
                    </code>
                  </pre>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={400}>
                <div className="space-y-6">
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-primary animate-pulse" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Unified MCP Server</h3>
                      <p className="mt-2 text-muted-foreground">
                        Connect your MCP client to any tool through a single unified MCP server. 
                        Search, plan, and execute tools by intent with just one connection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Workflow Discovery</h3>
                      <p className="mt-2 text-muted-foreground">
                        Allow AI agents to dynamically discover tools and workflows 
                        best suited to their task at hand.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Secure Authentication</h3>
                      <p className="mt-2 text-muted-foreground">
                        End-users can authorize AI agents with access to their accounts through OAuth.
                        ACI.dev handles all token management and OAuth client setup.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <AnimatedText
                  tag="h2"
                  text="Key Features"
                  className="text-3xl md:text-4xl font-bold mb-4"
                  animationType="wave"
                  staggerDelay={100}
                />
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform provides everything you need to create powerful AI agents that 
                  can interact with various tools and services securely.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Webhook className="h-10 w-10" />,
                  title: "Pre-built Tool Integrations",
                  description: "Seamlessly integrate essential tools like Gmail, Hubspot, Notion, Slack, and more to your AI agents with little engineering effort."
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Managed Agent Authentication",
                  description: "Allow end-users to authorize your AI agents with access to their accounts through OAuth. ACI.dev handles all the token pains and OAuth client setups."
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Agent Secrets Manager",
                  description: "Allow end-users to store and manage credentials for web browsing AI agents. Set access policies to enhance security and reliability."
                },
                {
                  icon: <Paperclip className="h-10 w-10" />,
                  title: "Unified MCP Server",
                  description: "Connect your MCP client to any tool available on ACI.DEV through a single unified MCP server. Search, plan, and execute tools by intent with just one connection."
                },
                {
                  icon: <Search className="h-10 w-10" />,
                  title: "Workflow Discovery",
                  description: "Have the flexibility to allow AI agents to dynamically discover tools and workflows best suited to their task at hand."
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "API Execution Guardrails",
                  description: "Set natural language guardrails that prevent API execution when AI agents make unintended API requests. Address AI agent behavior at a sub-endpoint granularity."
                }
              ].map((feature, index) => (
                <ScrollReveal 
                  key={index} 
                  delay={100 * index} 
                  direction={["scale", "up", "flip"][index % 3] as "scale" | "up" | "flip"}
                >
                  <Card className="h-full overflow-hidden group relative hover:shadow-lg transition-shadow duration-300 border border-border">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="pt-6 relative z-10">
                      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tools Integration Section */}
        <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <AnimatedText
                  text="Seamless Tool Integrations"
                  tag="h2"
                  className="text-3xl md:text-4xl font-bold mb-4"
                  animationType="bounce"
                />
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Connect your AI agents to popular tools and services with minimal setup.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {tools.map((tool, index) => (
                <ScrollReveal 
                  key={tool.name} 
                  delay={100 * index} 
                  direction={index % 2 === 0 ? 'scale' : 'rotate'}
                  duration={600}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-40 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px] group">
                    <div className="mb-4 h-14 flex items-center justify-center">
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`} 
                        className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                      />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors text-center">{tool.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 opacity-90"></div>
          <div className="absolute inset-0">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <path 
                d="M 0,800 C 0,800 0,266 0,266 C 144.53571428571428,284.92857142857144 289.0714285714286,303.85714285714283 419,301 C 548.9285714285714,298.14285714285717 664.2499999999999,273.5 783,239 C 901.7500000000001,204.5 1023.9285714285713,160.14285714285714 1138,175 C 1252.0714285714287,189.85714285714286 1358.0357142857142,263.92857142857144 1464,337 C 1569.9642857142858,410.07142857142856 1675.9285714285713,482.1428571428571 1782,482 C 1888.0714285714287,481.8571428571429 1994.25,409.5 2074,375 C 2153.75,340.5 2207.071428571429,343.85714285714283 2295,349 C 2382.928571428571,354.14285714285717 2505.4642857142855,361.07142857142856 2628,368 C 2750.5357142857145,374.92857142857144 2873.0714285714284,381.85714285714283 2995,388 C 3116.9285714285716,394.14285714285717 3238.25,399.5 3330,402 C 3421.75,404.5 3483.9285714284716,404.1428571428571 3546,403 C 3608.0714285715284,401.8571428571429 3670.0357142857138,400.92857142857144 3732,400 C 3793.964285714286,399.07142857142856 3855.9285714285716,398.14285714285717 3900,397 C 3944.0714285714284,395.85714285714283 3970.25,394.5 4026,396 C 4081.75,397.5 4167.071428571428,401.85714285714283 4252,406 C 4336.928571428572,410.14285714285717 4421.464285714286,414.07142857142856 4506,418 C 4590.535714285714,421.92857142857144 4675.071428571428,425.85714285714283 4760,423 C2386.75,340.5 2207.071428571429,343.85714285714283 2295,349"
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="3"
              ></path>
              <path 
                d="M 0,800 C 0,800 0,533 0,533 C 85.17857142857142,498.42857142857144 170.35714285714283,463.85714285714283 284,456 C 397.64285714285717,448.14285714285717 539.75,467 666,505 C 792.25,543 902.6428571428571,600.1428571428571 1000,616 C 1097.357142857143,631.8571428571429 1181.6785714285716,606.4285714285714 1276,569 C 1370.3214285714284,531.5714285714286 1474.6428571428573,482.1428571428571 1568,466 C 1661.3571428571427,449.8571428571429 1743.7499999999995,467 1846,476 C 1948.2500000000005,485 2070.3571428571427,485.85714285714283 2173,507 C 2275.6428571428573,528.1428571428571 2358.8214285714284,569.5714285714286 2462,561 C 2565.1785714285716,552.4285714285714 2688.357142857143,493.85714285714283 2789,485 C 2889.642857142857,476.14285714285717 2967.75,517 3046,534 C 3124.25,551 3202.6428571428573,544.1428571428571 3281,537"
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="3"
              ></path>
            </svg>
          </div>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Build Powerful Multi-Environment Agents
              </h2>
              <p className="mb-8 text-white/90 text-lg">
                Create powerful AI agents in minutes instead of weeks with ACI.dev's secure, 
                cross-category authentication infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Documentation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">ACI.dev</h3>
              <p className="text-muted-foreground max-w-md">
                Agent-Computer Interface platform that enables developers to build powerful 
                AI agents that interact with tools, websites, and systems securely.
              </p>
              <div className="flex space-x-4 mt-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://www.aci.dev/docs/introduction/overview" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">Examples</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} ACI.dev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
