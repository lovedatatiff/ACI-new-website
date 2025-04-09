
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  Cpu, 
  ZapOff, 
  Smartphone, 
  Layers, 
  Code, 
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Optimized Performance',
    description: 'Buttery-smooth animations with minimal impact on performance and battery life.'
  },
  {
    icon: <ZapOff className="h-8 w-8" />,
    title: 'Zero Dependencies',
    description: 'Lightweight library with no external dependencies to slow your site down.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Friendly',
    description: 'Fully responsive animations that look great on any device or screen size.'
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: 'Customizable Effects',
    description: 'Easily customize animation direction, timing, easing, and trigger thresholds.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Developer Friendly',
    description: 'Simple API with TypeScript support for a seamless developer experience.'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Beautiful Defaults',
    description: 'Carefully crafted presets that look amazing right out of the box.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="section-container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Key Features
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our animation library provides everything you need to create engaging, 
          scroll-triggered animations without the complexity.
        </p>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <ScrollReveal
            key={index}
            delay={300 + index * 100}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/20 transition-colors">
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Features;
