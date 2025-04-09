
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check } from 'lucide-react';

const codeSnippets = {
  basic: `
// Import the ScrollReveal component
import ScrollReveal from './components/ScrollReveal';

// Use it to wrap any content you want to animate
const MyComponent = () => {
  return (
    <ScrollReveal>
      <h2>This will animate when scrolled into view</h2>
      <p>Content will fade in from the bottom</p>
    </ScrollReveal>
  );
};
`,
  advanced: `
// Advanced configuration options
<ScrollReveal
  direction="left"
  threshold={0.3}
  delay={200}
  duration={1000}
  once={false}
>
  <div className="card">
    <h3>Custom Animation Settings</h3>
    <p>This element slides in from the left</p>
    <p>with a delay and different duration</p>
  </div>
</ScrollReveal>
`,
  sequence: `
// Create sequence animations with different delays
<div className="grid grid-cols-3 gap-4">
  {items.map((item, index) => (
    <ScrollReveal
      key={item.id}
      delay={index * 100}
      direction="up"
    >
      <div className="card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </ScrollReveal>
  ))}
</div>
`
};

const CodeExample: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const copyToClipboard = (code: string, tab: string) => {
    navigator.clipboard.writeText(code.trim());
    setCopied(tab);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="section-container bg-secondary/30">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Easy to Implement
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Our animation library is designed to be simple to use with a React-friendly API. 
          Just wrap your components and watch them come to life.
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={400}>
        <div className="max-w-3xl mx-auto mt-8">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="sequence">Sequences</TabsTrigger>
            </TabsList>
            
            {(['basic', 'advanced', 'sequence'] as const).map((tab) => (
              <TabsContent key={tab} value={tab} className="relative">
                <div className="code-block rounded-md">
                  <div className="flex justify-between items-center mb-2 px-2">
                    <span className="text-xs text-gray-400">
                      {tab === 'basic' ? 'ScrollReveal.tsx' : 
                       tab === 'advanced' ? 'AdvancedUsage.tsx' : 'SequenceExample.tsx'}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard(codeSnippets[tab], tab)}
                      className="h-8 px-2 text-gray-400 hover:text-white"
                    >
                      {copied === tab ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="text-sm overflow-x-auto p-2">
                    <code>{codeSnippets[tab]}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CodeExample;
